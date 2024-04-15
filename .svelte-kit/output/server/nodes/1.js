

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2f177a89.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/index.67dfe82c.js","_app/immutable/chunks/stores.fa028d82.js","_app/immutable/chunks/singletons.a056ddbe.js","_app/immutable/chunks/index.65dbf9f2.js"];
export const stylesheets = [];
export const fonts = [];
