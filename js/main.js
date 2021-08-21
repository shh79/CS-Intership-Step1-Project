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

//memory save button
document.querySelector("#MSID").addEventListener("click", () => {
    Op.saveMemory();
});

//Equal button functions
document.querySelector(".equal").addEventListener("click", () => {
    Op.HistoryItemAdder();
});

//Memory Clear(MC) operator
document.querySelector("#MCID").addEventListener("click", () => {
    Op.MCOperator();
});

//Memory Recentlly(MR) operator
document.querySelector("#MRID").addEventListener("click", () => {
    Op.MROperator();
});

//Memory + (M+) operator
document.querySelector("#PMID").addEventListener("click", () => {
    Op.MPlusOperator();
});

//Memory - (M-) operator
document.querySelector("#MMID").addEventListener("click", () => {
    Op.MMinusOperator();
});

//History button function
document.querySelector("#HistoryBtn").addEventListener("click", () => {
    Op.LoadMiniSection('History');
});

//Memory button function
document.querySelector("#MemoryPageID").addEventListener("click", () => {
    Op.LoadMiniSection('Memory');
});