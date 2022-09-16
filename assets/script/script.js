let displayOperation = document.getElementById("display-operation");
let displayChronology = document.getElementById("display-chronology");

function takeNumber(number) {
    displayOperation.value = number;
    displayChronology.value += number;
}