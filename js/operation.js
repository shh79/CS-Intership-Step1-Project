export function toggle(switchNum){
    let history=document.querySelector(".HistorySection");
    let memory=document.querySelector(".MemorySection");
    let clearBar=document.querySelector(".recycleBin");
    switch(switchNum){
        case 'history':
            document.querySelector("#historyBTN").classList.add("UnderLine");
            document.querySelector("#memoryBTN").classList.remove("UnderLine");

            memory.classList.add("hidden");
            history.classList.remove("hidden");

            if(history.childNodes.length==1){
                clearBar.classList.add("hidden");

                history.innerHTML=`<div class="clearMsg">There's no history yet</div>`;
            }
            else{
                clearBar.classList.remove("hidden");
            }

            break;

        case 'memory':
            document.querySelector("#memoryBTN").classList.add("UnderLine");
            document.querySelector("#historyBTN").classList.remove("UnderLine");

            history.classList.add("hidden");
            memory.classList.remove("hidden");

            if(memory.childNodes.length==1){
                clearBar.classList.add("hidden");
                
                memory.innerHTML=`<div class="clearMsg">There's nothing saved in memory</div>`;
            }
            else{
                clearBar.classList.remove("hidden");
            }

            break;
    }
}
export function clearList(){
    let label=document.querySelector("#historyBTN");
    let history=document.querySelector(".HistorySection");
    let memory=document.querySelector(".MemorySection");
    let clearBar=document.querySelector(".recycleBin");

    if(label.classList.contains("UnderLine")){
        history.innerHTML=`<div class="clearMsg">There's no history yet</div>`;
    }
    else{
        memory.innerHTML=`<div class="clearMsg">There's nothing saved in memory</div>`;
        document.querySelector("#MRID").classList.add("Unvisiable");
        document.querySelector("#MCID").classList.add("Unvisiable");
        document.querySelector("#MemoryPageID").classList.add("Unvisiable");
    }

    clearBar.classList.add("hidden");
}
export function restoreHistory(element){
    let back=element.childNodes[1].innerText;
    back=back.slice(0,back.length-1);
    let main=element.childNodes[3].innerText;

    document.querySelector(".tempHistory").innerText=back;
    document.querySelector(".input").innerText=main;
}
export function removeMemoryItem(item){
    let section = document.querySelector(".MemorySection");
    section.removeChild(item);
    if(section.childNodes.length == 0){
        document.querySelector(".recycleBin").classList.add("hidden");
        section.innerHTML=`<div class="clearMsg">There's nothing saved in memory</div>`;
        document.querySelector("#MRID").classList.add("Unvisiable");
        document.querySelector("#MCID").classList.add("Unvisiable");
        document.querySelector("#MemoryPageID").classList.add("Unvisiable");
    }
}
export function plusMemoryItem(item){
    let MNumber=Number(item.querySelector(".memoryNum").innerText.replace(",",""));
    let INumber=Number(document.querySelector(".input").innerText.replace(",",""));
    item.querySelector(".memoryNum").innerText=(MNumber+INumber);
}
export function minusMemoryItem(item){
    let MNumber=Number(item.querySelector(".memoryNum").innerText.replace(",",""));
    let INumber=Number(document.querySelector(".input").innerText.replace(",",""));
    item.querySelector(".memoryNum").innerText=(MNumber-INumber);
}
export function saveMemory(){
    let number=document.querySelector(".input").innerText;

    let section=document.querySelector(".MemorySection");

    let ClearMSG=document.querySelector(".MemorySection").querySelector(".clearMsg");

    if(ClearMSG!=null){
        section.innerHTML=``;
        document.querySelector(".recycleBin").classList.remove("hidden");
        document.querySelector("#MRID").classList.remove("Unvisiable");
        document.querySelector("#MCID").classList.remove("Unvisiable");
        document.querySelector("#MemoryPageID").classList.remove("Unvisiable");
    }

    section.innerHTML=`<div class="memoryItem">
            <p class="memoryNum">${number}</p>
            <div class="memoryItemBTNs">
                <button class="memoryClearBTN">MC</button>
                <button class="memoryPlusBTN">M+</button>
                <button class="memoryMinusBTN">M-</button>
            </div>
        </div>`+section.innerHTML;

        memoryButtonsReloader();

}
function historyItemReloader(){
    let items=document.querySelectorAll(".historyItem");
    items.forEach(item => {
        item.addEventListener("click", () => {
            restoreHistory(item);
        });
    });
}
function memoryButtonsReloader(){
    //clear memory item buttons
    let MCBtns=document.querySelectorAll(".memoryClearBTN");
    MCBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            removeMemoryItem(btn.parentNode.parentNode);
        });
    });

    //plus memory item buttons
    let MPlusBtns=document.querySelectorAll(".memoryPlusBTN");
    MPlusBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            plusMemoryItem(btn.parentNode.parentNode);
        });
    });

    //minus memory item buttons
    let MMinusBtns=document.querySelectorAll(".memoryMinusBTN");
    MMinusBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            minusMemoryItem(btn.parentNode.parentNode);
        });
    });
}
export function HistoryItemAdder(){
    let tempHistory=document.querySelector(".tempHistory").innerText;
    let mainHistory=document.querySelector(".input").innerText;
    let section=document.querySelector(".HistorySection");

    let ClearMSG=document.querySelector(".HistorySection").querySelector(".clearMsg");

    if(ClearMSG!=null){
        section.innerHTML=``;
        document.querySelector(".recycleBin").classList.remove("hidden");
    }

    section.innerHTML=`<div class="historyItem">
        <div class="historyItemSec1">${tempHistory}=</div>
        <div class="historyItemSec2">${mainHistory}</div>
    </div>`+section.innerHTML;

    historyItemReloader();
}
export function MCOperator(){
    let memory=document.querySelector(".MemorySection");
    memory.innerHTML=`<div class="clearMsg">There's nothing saved in memory</div>`;
    document.querySelector("#MRID").classList.add("Unvisiable");
    document.querySelector("#MCID").classList.add("Unvisiable");
    document.querySelector("#MemoryPageID").classList.add("Unvisiable");
    document.querySelector(".recycleBin").classList.add("hidden");
}
export function MROperator(){
    let item=document.querySelector(".memoryItem");
    if(item!=null){
        document.querySelector(".tempHistory").innerText="";
        document.querySelector(".input").innerText=item.querySelector(".memoryNum").innerText;
    }
}
export function MPlusOperator(){
    let item=document.querySelector(".memoryItem");
    let input=document.querySelector(".input").innerText;

    if(item!=null){
        item.querySelector(".memoryNum").innerText=
        Number(item.querySelector(".memoryNum").innerText.replace(",","")) + Number(input.replace(",",""));
    }
    else{
        document.querySelector(".MemorySection").innerHTML=
        `<div class="memoryItem">
            <p class="memoryNum">${input}</p>
            <div class="memoryItemBTNs">
                <button class="memoryClearBTN">MC</button>
                <button class="memoryPlusBTN">M+</button>
                <button class="memoryMinusBTN">M-</button>
            </div>
        </div>`;
        document.querySelector(".recycleBin").classList.remove("hidden");
        memoryButtonsReloader();
    }

    document.querySelector("#MRID").classList.remove("Unvisiable");
    document.querySelector("#MCID").classList.remove("Unvisiable");
    document.querySelector("#MemoryPageID").classList.remove("Unvisiable");
}
export function MMinusOperator(){
    let item=document.querySelector(".memoryItem");
    let input=document.querySelector(".input").innerText;
    
    if(item!=null){
        item.querySelector(".memoryNum").innerText=
        Number(item.querySelector(".memoryNum").innerText.replace(",","")) - Number(input.replace(",",""));
    }
    else{
        document.querySelector(".MemorySection").innerHTML=
        `<div class="memoryItem">
            <p class="memoryNum">-${input}</p>
            <div class="memoryItemBTNs">
                <button class="memoryClearBTN">MC</button>
                <button class="memoryPlusBTN">M+</button>
                <button class="memoryMinusBTN">M-</button>
            </div>
        </div>`;
        document.querySelector(".recycleBin").classList.remove("hidden");
        memoryButtonsReloader();
    }

    document.querySelector("#MRID").classList.remove("Unvisiable");
    document.querySelector("#MCID").classList.remove("Unvisiable");
    document.querySelector("#MemoryPageID").classList.remove("Unvisiable");
}
export function LoadMiniSection(type){
    let layers=document.querySelector(".LayerHolder").childNodes;
    let history=document.querySelector(".HistorySection");
    let memory=document.querySelector(".MemorySection");

    switch(type){
        case 'History':
            if(layers[3].classList.contains("hiddenLayer")){//open panel here
                layers[3].classList.remove("hiddenLayer");
                layers[1].classList.add("hiddenLayer");
                layers[5].classList.add("hiddenLayer");

                layers[3].querySelector(".Stage").innerHTML=history.innerHTML;
                if(history.innerHTML==`<div class="clearMsg">There's no history yet</div>`){
                    layers[3].querySelector(".MiniRecycleBinH").classList.add("hiddenLayer");
                }
            }
            else{
                layers[3].classList.add("hiddenLayer");
                layers[1].classList.remove("hiddenLayer");
                layers[5].classList.add("hiddenLayer");
            }
            break;
        case 'Memory':
            if(layers[5].classList.contains("hiddenLayer")){//open panel here
                layers[5].classList.remove("hiddenLayer");
                layers[1].classList.add("hiddenLayer");
                layers[3].classList.add("hiddenLayer");
            
                // layers[5].querySelector(".Stage").innerHTML=memory.innerHTML;
                // if(memory.innerHTML==`<div class="clearMsg">There's nothing saved in memory</div>`){
                //     layers[5].querySelector(".MiniRecycleBinM").classList.add("hiddenLayer");
                // }
            }
            else{
                layers[5].classList.add("hiddenLayer");
                layers[1].classList.remove("hiddenLayer");
                layers[3].classList.add("hiddenLayer");
            }
            break;
    }
}