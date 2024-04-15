import { g as get_store_value } from "../../../chunks/window.js";
import { g as goto } from "../../../chunks/navigation.js";
import { w as walletStore } from "../../../chunks/walletStore.js";
function load() {
  const wallet = get_store_value(walletStore);
  if (!wallet.publicKey || !wallet.keyId) {
    goto("/signup");
  }
  return {
    keyId: wallet.keyId,
    publicKey: wallet.publicKey
  };
}
export {
  load
};
