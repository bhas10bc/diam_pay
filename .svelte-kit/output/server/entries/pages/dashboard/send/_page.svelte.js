import { s as subscribe } from "../../../../chunks/window.js";
import { c as create_ssr_component, g as getContext, d as each, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import "../../../../chunks/walletStore.js";
import "stellar-sdk";
import { c as contacts } from "../../../../chunks/contactsStore.js";
import "../../../../chunks/horizonQueries.js";
import "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let otherDestination;
  let $contacts, $$unsubscribe_contacts;
  $$unsubscribe_contacts = subscribe(contacts, (value) => $contacts = value);
  let { data } = $$props;
  getContext("simple-modal");
  let destination = "";
  let otherPublicKey = "";
  let sendAmount = "";
  let memo = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  otherDestination = destination === "other";
  $$unsubscribe_contacts();
  return `  <h1 data-svelte-h="svelte-xk154f">Send a Payment</h1> <p data-svelte-h="svelte-1p5z86l">The <code>/dashboard/send</code> page allows the user to send payments to other Diam addresses. They
    can select from a dropdown containing their contact list names, or they could enter their own &quot;Other...&quot;
    public key.</p> <p data-svelte-h="svelte-161mgcr">Please complete the fields below to send a payment on the Diam network.</p>  <div class="form-control my-5"><label for="destination" class="label" data-svelte-h="svelte-feruth"><span class="label-text">Destination</span></label> <select id="destination" name="destination" class="select-bordered select"><option value="" disabled selected data-svelte-h="svelte-8mxnoy">Select Recipient</option>${each($contacts, (contact) => {
    return `<option${add_attribute("value", contact.address, 0)}>${escape(contact.name)}</option>`;
  })}<option value="other" data-svelte-h="svelte-1l42ty6">Other...</option></select></div>   ${otherDestination ? `<div class="form-control my-5"><label for="otherPublicKey" class="label" data-svelte-h="svelte-1701iv9"><span class="label-text">Destination Public Key</span></label> <input id="otherPublicKey" name="otherPublicKey" type="text" placeholder="G..." class="input-bordered input"${add_attribute("value", otherPublicKey, 0)}></div>` : ``}   ${``}  ${``}  ${` <div class="form-control my-5 max-w-full"><label for="amount" class="label" data-svelte-h="svelte-1ey00w9"><span class="label-text">Amount</span></label> <div class="join"><div class="grow"><div><input id="amount" name="amount" class="input-bordered input join-item w-full" type="text" placeholder="0.01"${add_attribute("value", sendAmount, 0)}></div></div> <select id="asset" name="asset" class="select-bordered select join-item" ${""}><option value="" disabled data-svelte-h="svelte-1rixgdc">Select Asset</option><option value="native" data-svelte-h="svelte-tg1dic">DIAM</option>${each(data.balances, (balance) => {
    return `${"asset_code" in balance ? (() => {
      let assetString = `${balance.asset_code}:${balance.asset_issuer}`;
      return ` <option${add_attribute("value", assetString, 0)}>${escape(balance.asset_code)}</option>`;
    })() : ``}`;
  })}</select></div></div> `}   <div class="form-control my-5"><label for="memo" class="label" data-svelte-h="svelte-1irimp6"><span class="label-text">Text Memo</span> <span class="label-text-alt">Optional</span></label> <input id="memo" name="memo" type="text" class="input-bordered input" placeholder="Maximum 28 characters" maxlength="28"${add_attribute("value", memo, 0)}></div>   <div class="form-control my-5"><button class="btn-primary btn" data-svelte-h="svelte-1sif56o">Preview Transaction</button></div> `;
});
export {
  Page as default
};
