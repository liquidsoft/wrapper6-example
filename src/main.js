/*
Dependecies
 */

import {Application} from "wrapper6";

/*
Modules
 */

import Index from "./modules/index";
import Logger from "./modules/logger";
import Messages from "./modules/messages";

/*
Bootstrap
*/

var app = window.app = new Application({

    logger: {
        delay: 5000
    },

    messages: {
        list: [
            "Hello",
            "The messages module is now ready"
        ]
    }

});

app.use(Index);
app.use(Messages);
app.use("logger", Logger);      // A named module can be required as a dependency!