

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.891e7c41.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/index.67dfe82c.js"];
export const stylesheets = [];
export const fonts = [];
