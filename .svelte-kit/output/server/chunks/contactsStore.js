import { v4 } from "uuid";
import { p as persisted } from "./index3.js";
import { StrKey } from "stellar-sdk";
import { e as error } from "./index.js";
import { g as get_store_value } from "./window.js";
function createContactsStore() {
  const { subscribe, set, update } = persisted("bpa:contactList", []);
  return {
    subscribe,
    /**
     * Erases all contact entries from the list and creates a new, empty contact list.
     */
    empty: () => set([]),
    /**
     * Removes the specified contact entry from the list.
     * @param {string} id Unique identifier of the contact to be removed from the list
     */
    remove: (id) => update((list) => list.filter((contact) => contact.id !== id)),
    /**
     * Adds a new contact entry to the list with the provided details.
     * @function add
     * @param {ContactEntry} contact Details of new contact entry to add to the list
     * @throws Will throw an error if the new contact entry contains an invalid public key in the `address` field
     */
    add: (contact) => update((list) => {
      if (StrKey.isValidEd25519PublicKey(contact.address)) {
        return [...list, { ...contact, id: v4() }];
      } else {
        throw error(400, { message: "invalid public key" });
      }
    }),
    /**
     * Toggles the "favorite" field on the specified contact.
     * @param {string} id Unique identifier of the contact to be favorited or unfavorited
     */
    favorite: (id) => update((list) => {
      const i = list.findIndex((contact) => contact.id === id);
      if (i >= 0) {
        list[i].favorite = !list[i].favorite;
      }
      return list;
    }),
    /**
     * Searches the contact list for an entry with the specified address.
     * @param {string} address Public Stellar address to lookup in the contact list
     * @returns {string|false} Returns the `name` field of the found contact entry, false if there is none
     */
    lookup: (address) => {
      let list = get_store_value(contacts);
      let i = list.findIndex((contact) => contact.address === address);
      if (i >= 0) {
        return list[i].name;
      } else {
        return false;
      }
    }
  };
}
const contacts = createContactsStore();
export {
  contacts as c
};
