/*
Dependencies
 */

import {Module} from "wrapper6";

/*
Module
 */

export default class IndexModule extends Module {

    boot() {
        // The index module will only boot if the body contains the index class
        if (!document.body.classList.contains("index")) {
            return false;
        }

        // Add the description to document.body
        this.description = document.createElement("div");
        this.description.id = "description";

        document.body.appendChild(this.description);
    }

    ready() {
        // Set inner text once the module has booted
        this.description.innerText = "Index module has loaded and it is ready.";
    }

}