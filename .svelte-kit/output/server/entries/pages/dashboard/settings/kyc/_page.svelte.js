import { s as subscribe } from "../../../../../chunks/window.js";
import { c as create_ssr_component, d as each, a as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { k as kycStore } from "../../../../../chunks/kycStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $kycStore, $$unsubscribe_kycStore;
  $$unsubscribe_kycStore = subscribe(kycStore, (value) => $kycStore = value);
  $$unsubscribe_kycStore();
  return `  <h1 data-svelte-h="svelte-1tkoq9v">KYC Information</h1> <p data-svelte-h="svelte-1344fyg">The <code>/dashboard/settings/kyc</code> allows the user to view and modify the locally saved KYC
    information they have submitted through various SEP-6 anchors. Changes made here will be submitted
    to the KYC server the next time a SEP-6 transfer is initiated.</p> <p data-svelte-h="svelte-14dlcu1"><small>(Changes are automatically saved.)</small></p> ${each(Object.keys($kycStore), (key) => {
    return `<div class="form-control my-1"><label${add_attribute("for", `kyc-field-${key}`, 0)} class="label"><span class="label-text uppercase">${escape(key.replaceAll("_", " "))}</span></label> <input${add_attribute("name", `kyc-field-${key}`, 0)}${add_attribute("id", `kyc-field-${key}`, 0)} type="text" class="input-bordered input"${add_attribute("value", $kycStore[key], 0)}> </div>`;
  })}`;
});
export {
  Page as default
};
