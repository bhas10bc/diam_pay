import { s as subscribe } from "../../../chunks/window.js";
import { c as create_ssr_component, g as getContext, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { Keypair } from "stellar-sdk";
import { T as TruncatedKey } from "../../../chunks/TruncatedKey.js";
import { w as walletStore } from "../../../chunks/walletStore.js";
import "../../../chunks/horizonQueries.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let publicKey;
  let $$unsubscribe_walletStore;
  $$unsubscribe_walletStore = subscribe(walletStore, (value) => value);
  getContext("simple-modal");
  let keypair = Keypair.random();
  let showSecret = false;
  let pincode = "";
  publicKey = keypair.publicKey();
  keypair.secret();
  $$unsubscribe_walletStore();
  return `  <div class="hero bg-base-200 min-h-screen"><div class="hero-content flex-col gap-7 lg:flex-row-reverse"><div class="text-center lg:text-left" data-svelte-h="svelte-1gj7kc3"><h1 class="text-5xl font-bold">Signup now!</h1> <p class="py-6">Kindly create a 6-digit PIN code for registration. This PIN code will serve to
                encrypt the secret key linked to your Diam address, which will then be stored in
                your browser&#39;s local storage. Your secret key will remain only on your device,
                giving you sole possession and control over it.</p></div> <div class="flex-col"><div class="card bg-base-100 w-full max-w-sm flex-shrink-0 shadow-2xl"><div class="card-body"><form><div class="form-control my-1"><label for="publicKey" class="label" data-svelte-h="svelte-tru4k9"><span class="label-text">Public Key</span></label> <div class="input-bordered input flex">${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: publicKey }, {}, {})}</div> <label for="publicKey" class="label"><button class="link-hover label-text-alt link" data-svelte-h="svelte-1ldz27i">Generate new address?</button></label></div> <div class="form-control"><label class="label cursor-pointer pb-0"><span class="label-text" data-svelte-h="svelte-gqnu88">Show secret key?</span> <input id="showSecret" name="showSecret" type="checkbox" class="toggle-accent toggle"${add_attribute("checked", showSecret, 1)}></label></div> ${``} <div class="form-control my-1"><label for="pincode" class="label" data-svelte-h="svelte-1mgtpmh"><span class="label-text">Pincode</span></label> <input id="pincode" name="pincode" type="password" class="input-bordered input" minlength="6" maxlength="6" required${add_attribute("value", pincode, 0)}></div> <div class="form-control mt-6" data-svelte-h="svelte-16yaauf"><button type="submit" class="btn-primary btn">Signup</button></div> <div class="form-control my-1" data-svelte-h="svelte-1g7dv6a"><div class="label"><a class="link-hover label-text-alt link" href="/login">Existing users, login here.</a></div></div></form></div></div></div></div></div>`;
});
export {
  Page as default
};
