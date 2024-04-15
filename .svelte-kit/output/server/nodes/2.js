import * as universal from '../entries/pages/dashboard/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/+layout.js";
export const imports = ["_app/immutable/nodes/2.56ded3aa.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/navigation.00afe88d.js","_app/immutable/chunks/singletons.a056ddbe.js","_app/immutable/chunks/index.65dbf9f2.js","_app/immutable/chunks/horizonQueries.4e1e7f67.js","_app/immutable/chunks/index.027ae11e.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/walletStore.df8a4074.js","_app/immutable/chunks/index.a31f2cbe.js","_app/immutable/chunks/index.67dfe82c.js","_app/immutable/chunks/each.972e7fc1.js","_app/immutable/chunks/stores.fa028d82.js","_app/immutable/chunks/ErrorAlert.0e1f7f7a.js","_app/immutable/chunks/alertsStore.917fee82.js"];
export const stylesheets = [];
export const fonts = [];
