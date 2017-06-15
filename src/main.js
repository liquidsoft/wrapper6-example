const app = require("wrapper6");

// Globalize wrapper as app (for dev purpose)
window.app = app;

// Wrapper 6 configuration
app.config.set({
    // Specifies whether to log errors to console or not (defaults: true)
    debug: true,

    // Amount of time in milliseconds until a package times out and throws and error (defaults: 5000)
    // Setting this to false will cancel the timeouts
    package_timeout: 2500
});

// Passing options has been migrated from the app to modules
// e.g.
app.define("options", () => {
    return app.scope({
        // put your options here
    });
});

// Load modules on document ready
app.ready(() => {
    // Document is ready here
    // We must use node's require here because the es6 import is only allowed
    // at the top of the document
    require("./modules/index");
    require("./modules/messages");
    require("./modules/logger");
});