/*
Dependencies
 */

import {Module} from "wrapper6";

export default class BodyTextModule extends Module {

    boot() {
        this.element = document.body;
    }

    ready( app ) {
        this.setText(app.options.get("bodyText", "This is the default text"));
    }

    setText( text ) {
        this.element.innerHTML = text;
    }

}