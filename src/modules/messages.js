const app = require("wrapper6");

/*
 -------------------------------
 Name module with requirements registered using `define`
 -------------------------------
 */

app.define("messages", ["logger"], function ({logger}) {

    // Define some messages
    const messages = [
        "Hello",
        "How are you doing?"
    ];

    // Define the module controller
    const module = {
        writeAll() {
            messages.forEach((message) => {
                logger.log(message);
            });
        }
    };

    // Write all on initialization
    module.writeAll();

    // Export controller
    return module;
});