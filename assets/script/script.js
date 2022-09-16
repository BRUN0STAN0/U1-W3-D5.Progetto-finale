let displayOperation = document.getElementById("display-operation");
let displayChronology = document.getElementById("display-chronology");

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
    } catch (err) {
        displayOperation.style.fontSize = "27px";
        displayOperation.value = "INVALID INPUT";
    }
}

/* SCIENTIFIC OPERATOR */

let openScientific = false;
function displayScientific() {
    if (openScientific == true) {
        openScientific = false;
        document.getElementById("scientific-buttons").style.display = "none";
    } else {
        openScientific = true;
        document.getElementById("scientific-buttons").style.display = "grid";
    }
}

function takePow() {
    saveLocalVar = displayChronology.value
    displayChronology.value = Math.pow(displayChronology.value, 2);
    displayOperation.value = Math.pow(displayOperation.value, 2);
    if (displayChronology.value == "NaN") {
        displayChronology.value = saveLocalVar;
        displayOperation.style.fontSize = "18px";
        displayOperation.value = "INSERT ONLY ONE NUMBER"
    }
}

function takeSqrt() {
    saveLocalVar = displayChronology.value
    displayChronology.value = Math.sqrt(displayChronology.value);
    displayOperation.value = Math.sqrt(displayOperation.value);
    if (displayChronology.value == "NaN") {
        displayChronology.value = saveLocalVar;
        displayOperation.style.fontSize = "18px";
        displayOperation.value = "INSERT ONLY ONE NUMBER"
    }
}

function takePI() {
    saveLocalVar = displayChronology.value
    displayChronology.value *= Math.PI;
    displayOperation.value *= Math.PI;
    if (displayChronology.value == "NaN") {
        displayChronology.value = saveLocalVar;
        displayOperation.style.fontSize = "18px";
        displayOperation.value = "INSERT ONLY ONE NUMBER"
    }
}

function takeLog() {
    saveLocalVar = displayChronology.value
    displayChronology.value = Math.log(displayChronology.value);
    displayOperation.value = Math.log(displayOperation.value);
    if (displayChronology.value == "NaN") {
        displayChronology.value = saveLocalVar;
        displayOperation.style.fontSize = "18px";
        displayOperation.value = "INSERT ONLY ONE NUMBER"
    }
}