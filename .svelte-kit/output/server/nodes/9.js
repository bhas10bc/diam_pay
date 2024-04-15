

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/settings/kyc/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.d5bb8678.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/each.972e7fc1.js","_app/immutable/chunks/index.67dfe82c.js","_app/immutable/chunks/kycStore.f943d3b8.js","_app/immutable/chunks/index.a31f2cbe.js","_app/immutable/chunks/index.65dbf9f2.js"];
export const stylesheets = [];
export const fonts = [];
