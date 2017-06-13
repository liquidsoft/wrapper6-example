const app = require("wrapper6");
const {Promise} = require("es6-promise");

/*
 -------------------------------
 Named module registered using `use`
 -------------------------------
 */

class LoggerModule extends app.Module {
    boot() {
        // The log module will take some time to boot
        return new Promise((resolve) => {
            setTimeout(() => {
                // Append the textarea to body
                this.element = document.createElement("textarea");
                this.element.id = "log";

                document.body.appendChild(this.element);

                resolve();

            }, 1000);
        });
    }

    ready() {
        // Log something once the module is ready
        this.log("Logger module is ready.");
    }

    log(message) {
        this.element.value += (this.element.value.length > 0 ? "\n" : "") + message;
    }
}

/*
 -------------------------------
 Register
 -------------------------------
 */
app.use("logger", LoggerModule);