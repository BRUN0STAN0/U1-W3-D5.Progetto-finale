let displayOperation = document.getElementById("display-operation");
let displayChronology = document.getElementById("display-chronology");

/* MINIMAL CALCULATOR */

function takeNumber(number) {
    displayOperation.value += number;
    displayChronology.value += number;
}

function takeOperator(operator) {
    displayOperation.value = "";
    displayChronology.value += operator;
}

function deleteDisplay() {
    displayOperation.value = displayOperation.value.slice(0, -1);
    displayChronology.value = displayChronology.value.slice(0, -1);
}

function clearDisplay() {
    displayOperation.value = "";
    displayChronology.value = "";
    displayOperation.style.fontSize = "40px";
}

function equal() {
    try {
        displayOperation.value = eval(displayChronology.value);
        displayChronology.value = displayOperation.value;
    } catch {
        displayOperation.style.fontSize = "27px";
        displayOperation.value = "INVALID INPUT";
    }
}

/* SCIENTIFIC BUTTON */

let openScientific = false;

let scientificButton = document.getElementById("scientific-buttons");
scientificButton.style.opacity = "0";
scientificButton.style.height = "0";
function displayScientific() {
    if (openScientific == true) {
        openScientific = false;
        scientificButton.style.opacity = "0";
        scientificButton.style.height = "25px";

    } else {
        openScientific = true;
        scientificButton.style.opacity = "1";
        scientificButton.style.height = "40px";
    }
}

/* SCIENTIFIC OPERATOR */

function takePow() {
    displayChronology.value = Math.pow(displayChronology.value, 2);
    displayOperation.value = Math.pow(displayOperation.value, 2);
    nanError();
}

function takeSqrt() {
    displayChronology.value = Math.sqrt(displayChronology.value);
    displayOperation.value = Math.sqrt(displayOperation.value);
    nanError();
}

function takePI() {
    displayChronology.value *= Math.PI;
    displayOperation.value *= Math.PI;
    nanError();
}

function takeLog() {
    displayChronology.value = Math.log(displayChronology.value);
    displayOperation.value = Math.log(displayOperation.value);
    nanError();
}

/* NaN Error */

function nanError() {
    if (displayChronology.value == "NaN") {
        displayChronology.value = "";
        displayOperation.style.fontSize = "18px";
        displayOperation.value = "INSERT ONLY ONE NUMBER"
    }
}