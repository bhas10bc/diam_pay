import { e as error } from "./index.js";
import { Server, StrKey } from "stellar-sdk";
const horizonUrl = "https://diamtestnet.diamcircle.io/";
const friendbotHorizonUrl = "https://diamtestnet.diamcircle.io/";
const server = new Server(horizonUrl);
new Server(friendbotHorizonUrl);
async function fetchAccount(publicKey) {
  if (StrKey.isValidEd25519PublicKey(publicKey)) {
    try {
      let account = await server.accounts().accountId(publicKey).call();
      return account;
    } catch (err) {
      if (err.response?.status === 404) {
        throw error(404, "account not funded on network");
      } else {
        throw error(err.response?.status ?? 400, {
          // @ts-ignore
          message: `${err.response?.title} - ${err.response?.detail}`
        });
      }
    }
  } else {
    throw error(400, { message: "invalid public key" });
  }
}
async function fetchAccountBalances(publicKey) {
  const { balances } = await fetchAccount(publicKey);
  return balances;
}
async function fetchRecentPayments(publicKey, limit = 10) {
  const { records } = await server.payments().forAccount(publicKey).limit(limit).order("desc").call();
  return records;
}
async function fetchAssetsWithHomeDomains(balances) {
  let homeDomains = await Promise.all(
    balances.map(async (asset) => {
      if ("asset_issuer" in asset) {
        let account = await fetchAccount(asset.asset_issuer);
        if ("home_domain" in account) {
          return {
            ...asset,
            home_domain: account.home_domain
          };
        }
      }
    })
  );
  return homeDomains.filter((balance) => balance);
}
export {
  fetchRecentPayments as a,
  fetchAssetsWithHomeDomains as b,
  fetchAccountBalances as f
};
