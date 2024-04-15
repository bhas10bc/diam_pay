import "../../../../chunks/window.js";
import { c as create_ssr_component, g as getContext, d as each, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { T as Trash2Icon } from "../../../../chunks/Trash2Icon.js";
import "../../../../chunks/walletStore.js";
import "stellar-sdk";
import { T as TruncatedKey } from "../../../../chunks/TruncatedKey.js";
import "../../../../chunks/horizonQueries.js";
import "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let balances;
  let { data } = $$props;
  getContext("simple-modal");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  balances = data.balances ?? [];
  return `  <h1 data-svelte-h="svelte-ofbnzl">Assets</h1> <p data-svelte-h="svelte-1onbfsz">The <code>/dashboard/assets</code> page will allow the user to manage the Diam assets their account
    carries trustlines to. On this page, they can select from several pre-suggested or highly ranked
    assets, or they could specify their own asset to trust using an asset code and issuer public key.
    They can also remove trustlines that already exist on their account.</p> <h2 data-svelte-h="svelte-1ncy5wr">Add Trusted Assets</h2> <p data-svelte-h="svelte-15igzoy">Add a trustline on your account, allowing you to hold the specified asset.</p> <select class="select-bordered select my-2 w-full"><option value="custom" data-svelte-h="svelte-o4qf5i">Custom asset...</option></select> ${``} <button class="btn-primary btn-block btn my-2" data-svelte-h="svelte-g54wjn">Add Asset</button> <h2 data-svelte-h="svelte-15igkao">Existing Balances</h2> <p data-svelte-h="svelte-4x8vmn">View or remove asset trustlines on your DIAM account.</p> <div class="flex items-center"><table class="table table-auto"><thead data-svelte-h="svelte-1r2gly7"><tr><th>Asset</th> <th>Balance</th> <th class="w-xs">Issuer</th> <th>Actions</th></tr></thead> <tbody>${each(balances, (balance) => {
    return `<tr><th>${"asset_code" in balance ? `${escape(balance.asset_code)}` : `DIAM`}</th> <td>${escape(balance.balance)}</td> <td>${"asset_issuer" in balance ? `${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: balance.asset_issuer }, {}, {})}` : ``}</td> <td>${"asset_code" in balance ? (() => {
      `${balance.asset_code}:${balance.asset_issuer}`;
      return ` <button class="btn-error btn-square btn-sm btn">${validate_component(Trash2Icon, "Trash2Icon").$$render($$result, { size: "16" }, {}, {})}</button>`;
    })() : ``}</td> </tr>`;
  })}</tbody></table></div>`;
});
export {
  Page as default
};
