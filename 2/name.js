const firstTxt = document.getElementById("first");
const middleTxt = document.getElementById("middle");
const lastTxt = document.getElementById("last");
const resultTxt = document.getElementById("sum");

function concatenate() {
    resultTxt.innerHTML = firstTxt.value + " " + middleTxt.value + " " + lastTxt.value;
}

function clearEntries() {
    firstTxt.value = "";
    middleTxt.value = "";
    lastTxt.value = ""; 
    resultTxt.innerHTML = "";
}