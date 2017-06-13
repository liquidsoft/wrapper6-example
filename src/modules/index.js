const app = require("wrapper6");

/*
 -------------------------------
 Unnamed module registered using `define`
 -------------------------------
 */

app.define(() => {

    // The index module will only boot if the body contains the index class
    if (!document.body.classList.contains("index")) {
        return false;
    }

    // Initialize element
    let description = document.createElement("div");
    description.id = "description";
    description.innerText = "Index module has loaded and it is ready.";

    document.body.appendChild(description);

});