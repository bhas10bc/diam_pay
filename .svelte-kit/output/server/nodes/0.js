import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.07bb2ddd.js","_app/immutable/chunks/scheduler.e2128b0a.js","_app/immutable/chunks/index.67dfe82c.js","_app/immutable/chunks/index.65dbf9f2.js","_app/immutable/chunks/alertsStore.917fee82.js"];
export const stylesheets = ["_app/immutable/assets/0.9145fc60.css"];
export const fonts = [];
