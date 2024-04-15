import { g as get_store_value } from "../../../chunks/window.js";
import { g as goto } from "../../../chunks/navigation.js";
import { f as fetchAccountBalances, a as fetchRecentPayments } from "../../../chunks/horizonQueries.js";
import { w as walletStore } from "../../../chunks/walletStore.js";
async function load() {
  const { publicKey } = get_store_value(walletStore);
  if (!publicKey) {
    goto("/signup");
  }
  return {
    publicKey,
    balances: await fetchAccountBalances(publicKey),
    payments: await fetchRecentPayments(publicKey)
  };
}
export {
  load
};
