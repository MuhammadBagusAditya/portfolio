

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Ck6SlXRm.js","_app/immutable/chunks/scheduler.B6D7dOSC.js","_app/immutable/chunks/index.70WUhYb_.js","_app/immutable/chunks/paths.DW7z7EYb.js"];
export const stylesheets = [];
export const fonts = [];
