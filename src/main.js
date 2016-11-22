/*
Dependecies
 */

import {Application} from "wrapper6";

/*
Modules
 */

import BodyTextModule from "./modules/body-text";
import EventLoggerModule from "./modules/event-logger";

/*
Bootstrap
*/

var app = window.app = new Application({ bodyText: "Hello, this is an example" });

app.use("bodyText", BodyTextModule);    // Namespaced module
app.use(EventLoggerModule);             // Anonymous module

app.boot();