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
