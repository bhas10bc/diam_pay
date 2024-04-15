import * as universal from '../entries/pages/signup/_page.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/signup/+page.js";
export const imports = ["_app/immutable/nodes/12.711d18e5.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/navigation.00afe88d.js","_app/immutable/chunks/singletons.a056ddbe.js","_app/immutable/chunks/index.65dbf9f2.js","_app/immutable/chunks/walletStore.df8a4074.js","_app/immutable/chunks/index.027ae11e.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.a31f2cbe.js","_app/immutable/chunks/index.67dfe82c.js","_app/immutable/chunks/TruncatedKey.d469d295.js","_app/immutable/chunks/copy.fd988812.js","_app/immutable/chunks/contactsStore.ac086bc5.js","_app/immutable/chunks/ConfirmationModal.56c6a33a.js","_app/immutable/chunks/each.972e7fc1.js","_app/immutable/chunks/alertsStore.917fee82.js","_app/immutable/chunks/ErrorAlert.0e1f7f7a.js","_app/immutable/chunks/horizonQueries.4e1e7f67.js"];
export const stylesheets = ["_app/immutable/assets/TruncatedKey.d4e15eee.css"];
export const fonts = [];
