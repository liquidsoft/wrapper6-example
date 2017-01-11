/*
 Dependencies
 */

import {Module} from "wrapper6";
import {Promise} from "es6-promise";

/*
 Module
 */

export default class MessagesModule extends Module {

    boot( app ) {
        // The messages module depend on the logger module to be booted
        return app.require([ "logger" ]).then(({ logger }) => {
            // Load some messages
            return new Promise(( resolve ) => {
                setTimeout(() => {
                    resolve({
                        logger: logger,
                        messages: app.options.get("messages.list", [])
                    });

                }, app.options.get("messages.delay", 2000));

            });
        });
    }

    ready( app, { logger, messages }) {
        messages.forEach((message) => {
            logger.log(message);
        });
    }

}