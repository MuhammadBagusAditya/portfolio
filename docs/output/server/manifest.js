export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set(["favicon1.png","my-photo.jpg","SF2_1358.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.B0zvAVtD.js","app":"_app/immutable/entry/app.CWMFhOvH.js","imports":["_app/immutable/entry/start.B0zvAVtD.js","_app/immutable/chunks/entry.DVO1Jjy1.js","_app/immutable/chunks/scheduler.B6D7dOSC.js","_app/immutable/chunks/paths.DW7z7EYb.js","_app/immutable/entry/app.CWMFhOvH.js","_app/immutable/chunks/scheduler.B6D7dOSC.js","_app/immutable/chunks/index.70WUhYb_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
