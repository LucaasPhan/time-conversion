'use strict';
import { timeConversion } from "./timeConversion.js";

//handle Enter key pressed
function enterKeyPressed(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        timeConversion();
    }
}


