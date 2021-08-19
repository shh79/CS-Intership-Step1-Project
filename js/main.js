import * as Cal from "../js/calculation.js";
import * as Op from "../js/operation.js";

//history & memory section formed
Op.toggle('history');
document.querySelector("#historyBTN").addEventListener("click", () => {
    Op.toggle('history');
});
document.querySelector("#memoryBTN").addEventListener("click", () => {
    Op.toggle('memory');
});

//clear list button function
document.querySelector(".recycleBin").addEventListener("click", () => {
    Op.clearList();
})

//restore history items
let historyItems=document.querySelectorAll(".historyItem");
historyItems.forEach(item => {
    item.addEventListener("click", () => {
        Op.restoreHistory(item);
    });
});

//clear memory item buttons
let MCBtns=document.querySelectorAll(".memoryClearBTN");
MCBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        Op.removeMemoryItem(btn.parentNode.parentNode);
    });
});

//plus memory item buttons
let MPlusBtns=document.querySelectorAll(".memoryPlusBTN");
MPlusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        Op.plusMemoryItem(btn.parentNode.parentNode);
    });
});

//minus memory item buttons
let MMinusBtns=document.querySelectorAll(".memoryMinusBTN");
MMinusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        Op.minusMemoryItem(btn.parentNode.parentNode);
    });
});

window.resizeTo("800px", "800px");
