/*
 Dependencies
 */

import {Module} from "wrapper6";

export default class EventLoggerModule extends Module {

    boot() {
        console.log("EventLogger booted");
    }

    ready( app ) {
        console.log("EventLogger ready");
    }

}