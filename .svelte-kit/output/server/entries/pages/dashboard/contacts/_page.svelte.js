import { s as subscribe } from "../../../../chunks/window.js";
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, d as each } from "../../../../chunks/ssr.js";
import { T as Trash2Icon } from "../../../../chunks/Trash2Icon.js";
import { T as TruncatedKey } from "../../../../chunks/TruncatedKey.js";
import { c as contacts } from "../../../../chunks/contactsStore.js";
const UserPlusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-user-plus " + escape(customClass, true)}"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newContact;
  let $contacts, $$unsubscribe_contacts;
  $$unsubscribe_contacts = subscribe(contacts, (value) => $contacts = value);
  newContact = {
    name: "",
    address: "",
    favorite: false,
    id: ""
  };
  $$unsubscribe_contacts();
  return `  <h1 data-svelte-h="svelte-e6lo79">Contacts</h1> <p data-svelte-h="svelte-7w1i2l">The <code>/dashboard/contacts</code> page will allow the user to collect and manage a list of contact
    entries that stores the contact&#39;s name and Stellar address. The contact can also be flagged/unflagged
    as a &quot;favorite&quot; contact to be displayed on the main \`/dashboard\` page.</p> <h3 data-svelte-h="svelte-1bbhe3g">All contacts</h3> <table class="table w-full"><thead data-svelte-h="svelte-1hdn9xk"><tr><th class="w-1/12 text-center">Favorite</th> <th>Name</th> <th>Address</th> <th class="w-1/12 text-center">Action</th></tr></thead> <tbody><tr><th class="text-center"><input id="favorite" name="favorite" type="checkbox" class="checkbox-accent checkbox checkbox-sm"${add_attribute("checked", newContact.favorite, 1)}></th> <td><label for="name" data-svelte-h="svelte-lhbhj0"><span class="label-text hidden">Name</span></label> <input id="name" name="name" type="text" placeholder="Name" class="input-bordered input input-sm w-full"${add_attribute("value", newContact.name, 0)}></td> <td><label for="address" data-svelte-h="svelte-4icplk"><span class="label-text hidden">Address</span></label> <input id="address" name="address" type="text" placeholder="Address" class="input-bordered input input-sm w-full"${add_attribute("value", newContact.address, 0)}></td> <td class="text-center"><button id="addContactButton" name="addContactButton" type="submit" class="btn-success btn-sm btn-square btn">${validate_component(UserPlusIcon, "UserPlusIcon").$$render($$result, { size: "16" }, {}, {})}</button></td></tr> ${each($contacts, (contact) => {
    return `<tr><th class="text-center"><input${add_attribute("id", `favoriteCheckbox${contact.id}`, 0)}${add_attribute("name", `favoriteCheckbox${contact.id}`, 0)} type="checkbox" ${contact.favorite ? "checked" : ""} class="checkbox-accent checkbox checkbox-sm"></th> <td><div class="flex items-center space-x-3"><div class="avatar"><div class="not-prose w-10 rounded-full"><img src="${"https://id.lobstr.co/" + escape(contact.address, true) + ".png"}" alt="Avatar Tailwind CSS Component"> </div></div> <div><div class="font-bold">${escape(contact.name)}</div></div> </div></td> <td>${validate_component(TruncatedKey, "TruncatedKey").$$render(
      $$result,
      {
        keyText: contact.address,
        lookupName: false
      },
      {},
      {}
    )}</td> <td class="text-center"><button${add_attribute("id", `removeContact${contact.id}`, 0)}${add_attribute("name", `removeContact${contact.id}`, 0)} class="btn-error btn-sm btn-square btn">${validate_component(Trash2Icon, "Trash2Icon").$$render($$result, { size: "16" }, {}, {})} </button></td> </tr>`;
  })}</tbody></table>`;
});
export {
  Page as default
};
