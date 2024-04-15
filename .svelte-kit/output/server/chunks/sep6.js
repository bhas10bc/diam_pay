import { p as persisted } from "./index3.js";
import { g as get_store_value } from "./window.js";
import { Buffer } from "buffer";
import { e as error } from "./index.js";
import { StellarTomlResolver } from "stellar-sdk";
function createTransfersStore() {
  const { subscribe, update } = persisted("bpa:transfersStore", {});
  return {
    subscribe,
    /**
     * Adds a new transfer ID to the list of tracked anchor transfers.
     * @param {Object} opts Options object
     * @param {string} opts.homeDomain Home domain of the anchor server facilitating the transfer
     * @param {('sep6'|'sep24')} opts.protocol Which standard was used for this transfer (SEP-6 or SEP-24)
     * @param {string} opts.assetCode Asset code involved in the transfer
     * @param {string} opts.transferID Unique identifier for this transfer
     */
    addTransfer: ({ homeDomain, protocol, assetCode, transferID }) => update((store) => {
      let newStore = { ...store };
      if (homeDomain in newStore) {
        if (protocol in newStore[homeDomain]) {
          newStore[homeDomain][protocol].push({
            id: transferID,
            asset_code: assetCode
          });
        } else {
          newStore[homeDomain][protocol] = [{ id: transferID, asset_code: assetCode }];
        }
      } else {
        newStore[homeDomain] = {
          [protocol]: [{ id: transferID, asset_code: assetCode }]
        };
      }
      return newStore;
    })
  };
}
const transfers = createTransfersStore();
function createWebAuthStore() {
  const { subscribe, update } = persisted("bpa:webAuthStore", {});
  return {
    subscribe,
    /**
     * Stores a JWT authentication token associated with a home domain server.
     * @param {string} homeDomain Home domain to store a JWT authentication token for
     * @param {string} token JSON web token used for authenticating requests with this asset anchor
     */
    setAuth: (homeDomain, token) => update((store) => {
      return {
        ...store,
        [homeDomain]: token
      };
    }),
    /**
     * Determine whether or not a JSON web token has an expiration date in the future or in the past.
     * @param {string} homeDomain Home domain to check a JWT authentication token for
     * @returns {boolean|undefined} True if the token is expired, false if it is still valid
     */
    isTokenExpired: (homeDomain) => {
      let token = get_store_value(webAuthStore)[homeDomain];
      if (token) {
        let payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
        let timestamp = Math.floor(Date.now() / 1e3);
        return timestamp > payload.exp;
      } else {
        return void 0;
      }
    }
  };
}
const webAuthStore = createWebAuthStore();
async function fetchStellarToml(domain) {
  let stellarToml = await StellarTomlResolver.resolve(domain);
  return stellarToml;
}
async function getTransferServerSep6(domain) {
  let { TRANSFER_SERVER } = await fetchStellarToml(domain);
  return TRANSFER_SERVER;
}
async function getTransferServerSep24(domain) {
  let { TRANSFER_SERVER_SEP0024 } = await fetchStellarToml(domain);
  return TRANSFER_SERVER_SEP0024;
}
async function getSep24Info(domain) {
  let transferServerSep24 = await getTransferServerSep24(domain);
  let res = await fetch(`${transferServerSep24}/info`);
  let json = await res.json();
  if (!res.ok) {
    throw error(res.status, {
      message: json.error
    });
  } else {
    return json;
  }
}
async function queryTransfers24({ authToken, assetCode, homeDomain }) {
  let transferServerSep24 = await getTransferServerSep24(homeDomain);
  let res = await fetch(
    `${transferServerSep24}/transactions?${new URLSearchParams({
      asset_code: assetCode
    })}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      }
    }
  );
  let json = await res.json();
  if (!res.ok) {
    throw error(res.status, {
      message: json.error
    });
  } else {
    return json;
  }
}
async function getSep6Info(domain) {
  let transferServer = await getTransferServerSep6(domain);
  let res = await fetch(`${transferServer}/info`);
  let json = await res.json();
  return json;
}
async function queryTransfers6({ authToken, assetCode, publicKey, homeDomain }) {
  let transferServer = await getTransferServerSep6(homeDomain);
  let res = await fetch(
    `${transferServer}/transactions?${new URLSearchParams({
      asset_code: assetCode,
      account: publicKey
    })}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      }
    }
  );
  let json = await res.json();
  if (!res.ok) {
    throw error(res.status, {
      message: json.error
    });
  } else {
    return json;
  }
}
export {
  queryTransfers24 as a,
  getSep24Info as b,
  fetchStellarToml as f,
  getSep6Info as g,
  queryTransfers6 as q,
  transfers as t,
  webAuthStore as w
};
