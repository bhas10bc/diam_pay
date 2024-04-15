import { s as subscribe, a as is_promise, b as noop } from "../../../chunks/window.js";
import { c as create_ssr_component, d as each, e as escape, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { T as TruncatedKey } from "../../../chunks/TruncatedKey.js";
import { c as contacts } from "../../../chunks/contactsStore.js";
import { t as transfers, w as webAuthStore, q as queryTransfers6, a as queryTransfers24 } from "../../../chunks/sep6.js";
const AssetStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `  <h3 data-svelte-h="svelte-p5ngm6">Assets Overview</h3> <div class="stats stats-vertical w-full bg-primary text-primary-content shadow lg:stats-horizontal">${each($page.data.balances, (balance) => {
    return `<div class="stat"><div class="stat-title">${escape(balance.asset_code ?? "DIAM")} Balance</div> <div class="stat-value">${escape(parseFloat(balance.balance).toFixed(2))} ${escape(balance.asset_code ?? "DIAM")}</div> </div>`;
  })}</div>`;
});
const RecentPayments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `  <h3 data-svelte-h="svelte-1c0ng58">Recent Payments</h3> <table class="table"><thead data-svelte-h="svelte-26m3cw"><tr><th>Amount</th> <th>Asset</th> <th>Direction</th> <th>Address</th></tr></thead> <tbody>${each($page.data.payments, (payment) => {
    return `<tr><th>${payment.amount ? `${escape(parseFloat(payment.amount).toFixed(2))}` : `${payment.starting_balance ? `${escape(parseFloat(payment.starting_balance).toFixed(2))}` : `${payment.type === "account_merge" ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(effects) {
        return ` ${each(effects.records.filter(
          /** @type {EffectRecord} */
          (e) => e.type === "account_credited"
        ), (effect) => {
          return `${escape(parseFloat(effect.amount).toFixed(2))}`;
        })} `;
      }(__value);
    }(payment.effects())}` : ``}`}`}</th> <td>${payment.type === "create_account" || payment.asset_type === "native" || payment.type === "account_merge" ? `DIAM` : `${escape(payment.asset_code)}`}</td> <td>${payment.to === $page.data.publicKey || "funder" in payment && payment.funder !== $page.data.publicKey || "into" in payment && payment.into === $page.data.publicKey ? `Received` : `Sent`}</td> <td>${"to" in payment ? `${payment.to === $page.data.publicKey ? `${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: payment.from }, {}, {})}` : `${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: payment.to }, {}, {})}`}` : `${"funder" in payment ? `${payment.funder === $page.data.publicKey ? `${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: payment.account }, {}, {})}` : `${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: payment.funder }, {}, {})}`}` : `${"into" in payment ? `${payment.into === $page.data.publicKey ? `${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: payment.account }, {}, {})}` : `${validate_component(TruncatedKey, "TruncatedKey").$$render($$result, { keyText: payment.into }, {}, {})}`}` : ``}`}`}</td> </tr>`;
  })}</tbody></table>`;
});
const FavoriteContacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let favoriteContacts;
  let $contacts, $$unsubscribe_contacts;
  $$unsubscribe_contacts = subscribe(contacts, (value) => $contacts = value);
  favoriteContacts = $contacts?.filter((contact) => contact.favorite);
  $$unsubscribe_contacts();
  return `  <h3 data-svelte-h="svelte-1k5sfut">Favorite Contacts</h3> <table class="table w-full"><thead data-svelte-h="svelte-ui8o41"><tr><th>Favorite</th> <th>Name</th> <th>Address</th></tr></thead> ${favoriteContacts ? `<tbody>${each(favoriteContacts, (contact) => {
    return `<tr><th><input type="checkbox" class="checkbox-accent checkbox checkbox-sm" ${contact.favorite ? "checked" : ""}></th> <td><div class="flex items-center space-x-3"><div class="avatar"><div class="not-prose w-10 rounded-full"><img src="${"https://id.lobstr.co/" + escape(contact.address, true) + ".png"}" alt="Avatar Tailwind CSS Component"> </div></div> <div><div class="font-bold">${escape(contact.name)}</div></div> </div></td> <td>${validate_component(TruncatedKey, "TruncatedKey").$$render(
      $$result,
      {
        keyText: contact.address,
        lookupName: false
      },
      {},
      {}
    )}</td> <th data-svelte-h="svelte-1mhspmj"><button class="btn-ghost btn-xs btn">Stellar.Expert</button></th> </tr>`;
  })}</tbody>` : ``}</table>`;
});
const TransferHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $transfers, $$unsubscribe_transfers;
  let $webAuthStore, $$unsubscribe_webAuthStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_transfers = subscribe(transfers, (value) => $transfers = value);
  $$unsubscribe_webAuthStore = subscribe(webAuthStore, (value) => $webAuthStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let expiredToken = false;
  const protocolBadgeClasses = {
    sep6: "badge badge-secondary",
    sep24: "badge badge-accent"
  };
  const query = (protocol, assetCode, homeDomain) => new Promise((resolve) => {
    protocol === "sep6" ? queryTransfers6({
      authToken: $webAuthStore[homeDomain],
      assetCode,
      publicKey: $page.data.publicKey,
      homeDomain
    }).then(({ transactions }) => resolve(transactions.map((item) => {
      return { ...item, asset_code: assetCode, protocol };
    }))) : queryTransfers24({
      authToken: $webAuthStore[homeDomain],
      assetCode,
      homeDomain
    }).then(({ transactions }) => resolve(transactions.map((item) => {
      return { ...item, asset_code: assetCode, protocol };
    })));
  });
  const transfersPromise = async () => {
    let transfersPromises = [];
    if ($transfers) {
      for (let homeDomain in $transfers) {
        if ($webAuthStore[homeDomain] && !webAuthStore.isTokenExpired(homeDomain)) {
          for (let protocol in $transfers[homeDomain]) {
            let uniqueAssets = [
              ...new Set($transfers[homeDomain][protocol].map((item) => item.asset_code))
            ];
            uniqueAssets.forEach(async (assetcode) => {
              transfersPromises.push(query(protocol, assetcode, homeDomain));
            });
          }
        } else {
          expiredToken = true;
        }
      }
    }
    let allTransfers = await Promise.all(transfersPromises);
    return allTransfers.flat().sort((a, b) => {
      return new Date(b.started_at) - new Date(a.started_at);
    });
  };
  $$unsubscribe_transfers();
  $$unsubscribe_webAuthStore();
  $$unsubscribe_page();
  return `  ${$transfers ? `<h3 data-svelte-h="svelte-19jepzn">Transfer History</h3> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(allTransfers) {
      return ` <table class="table-compact table"><thead data-svelte-h="svelte-ekf24u"><tr><th>Amount</th> <th>Asset</th> <th>Direction</th> <th>Protocol</th> <th>Status</th> <th>Date</th> <th>More Info</th> <th>Actions</th></tr></thead> <tbody>${each(allTransfers, (transfer) => {
        return `<tr><th>${escape(transfer.amount_in)}</th> <td>${escape(transfer.asset_code)}</td> <td>${escape(transfer.kind)}</td> <td><div${add_attribute("class", `${protocolBadgeClasses[transfer.protocol]}`, 0)}>${escape(transfer.protocol)} </div></td> <td>${escape(transfer.status)}</td> <td>${escape(new Date(Date.parse(transfer.started_at)).toLocaleString())}</td> <td>${transfer.status === "completed" ? `<a target="_blank"${add_attribute("href", `https://stellar.expert/explorer/testnet/tx/${transfer.stellar_transaction_id}`, 0)}>View Stellar transaction</a>` : `${"more_info_url" in transfer ? `<a target="_blank"${add_attribute("href", transfer.more_info_url, 0)}>View more info</a>` : ``}`}</td> <td>${transfer.kind === "withdrawal" && transfer.status === "pending_user_transfer_start" ? `Start a Payment` : `Nevermind`}</td> </tr>`;
      })}</tbody></table> ${expiredToken ? `<p data-svelte-h="svelte-8rqe6n">It looks like there may be a problem with some of your anchor authentication. Head over
            to the <a href="/dashboard/transfers">Transfers Page</a> to check that out.</p>` : ``} `;
    }(__value);
  }(transfersPromise())}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(AssetStats, "AssetStats").$$render($$result, {}, {}, {})}  <div class="grid grid-cols-1 gap-10 lg:grid-cols-2"><div class="overflow-x-auto">${validate_component(RecentPayments, "RecentPayments").$$render($$result, {}, {}, {})}</div> <div class="overflow-x-auto">${validate_component(FavoriteContacts, "FavoriteContacts").$$render($$result, {}, {}, {})}</div></div>  <div class="overflow-x-auto">${validate_component(TransferHistory, "TransferHistory").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
