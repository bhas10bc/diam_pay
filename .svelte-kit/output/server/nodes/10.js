import * as universal from '../entries/pages/dashboard/transfers/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/transfers/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/transfers/+page.js";
export const imports = ["_app/immutable/nodes/10.dea49fb6.js","_app/immutable/chunks/horizonQueries.4e1e7f67.js","_app/immutable/chunks/index.027ae11e.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/await_block.112a22fd.js","_app/immutable/chunks/index.67dfe82c.js","_app/immutable/chunks/each.972e7fc1.js","_app/immutable/chunks/stores.fa028d82.js","_app/immutable/chunks/singletons.a056ddbe.js","_app/immutable/chunks/index.65dbf9f2.js","_app/immutable/chunks/sep6.78e9d57b.js","_app/immutable/chunks/index.a31f2cbe.js","_app/immutable/chunks/kycStore.f943d3b8.js","_app/immutable/chunks/ConfirmationModal.56c6a33a.js","_app/immutable/chunks/copy.fd988812.js","_app/immutable/chunks/alertsStore.917fee82.js","_app/immutable/chunks/ErrorAlert.0e1f7f7a.js","_app/immutable/chunks/walletStore.df8a4074.js","_app/immutable/chunks/navigation.00afe88d.js","_app/immutable/chunks/transactions.8078ad3c.js"];
export const stylesheets = [];
export const fonts = [];
