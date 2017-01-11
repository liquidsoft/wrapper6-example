/*
 Dependencies
 */

import {Module} from "wrapper6";
import {Promise} from "es6-promise";

/*
 Module
 */

export default class LoggerModule extends Module {

    boot( app ) {
        // The log module will take some time to boot
        return new Promise(( resolve ) => {
            setTimeout(() => {

                // Append the textarea to body
                this.element = document.createElement("textarea");
                this.element.id = "log";

                document.body.appendChild(this.element);

                resolve();

            }, app.options.get("logger.delay", 1000));
        });
    }

    ready() {
        // Log something once the module is ready
        this.log("Logger module is ready.");
    }

    log( message ) {
        this.element.value += (this.element.value.length > 0 ? "\n" : "") + message;
    }

}