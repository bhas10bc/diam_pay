

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/settings/dev/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.2a0295de.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/index.67dfe82c.js","_app/immutable/chunks/walletStore.df8a4074.js","_app/immutable/chunks/index.027ae11e.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.a31f2cbe.js","_app/immutable/chunks/index.65dbf9f2.js","_app/immutable/chunks/contactsStore.ac086bc5.js","_app/immutable/chunks/horizonQueries.4e1e7f67.js"];
export const stylesheets = ["_app/immutable/assets/TruncatedKey.d4e15eee.css"];
export const fonts = [];
