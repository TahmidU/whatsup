const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"dashboard.index":{"uri":"dashboard","methods":["GET","HEAD"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"about":{"uri":"about","methods":["GET","HEAD"]},"safety":{"uri":"safety","methods":["GET","HEAD"]},"support":{"uri":"support","methods":["GET","HEAD"]},"careers":{"uri":"careers","methods":["GET","HEAD"]},"register.show":{"uri":"register","methods":["GET","HEAD"]},"register.store.user":{"uri":"register","methods":["POST"]},"login.show":{"uri":"login","methods":["GET","HEAD"]},"login.auth":{"uri":"login","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
