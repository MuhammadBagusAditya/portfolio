import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BOmyZGWt.js","_app/immutable/chunks/scheduler.B6D7dOSC.js","_app/immutable/chunks/index.70WUhYb_.js"];
export const stylesheets = ["_app/immutable/assets/0.DpdUti9e.css"];
export const fonts = [];
