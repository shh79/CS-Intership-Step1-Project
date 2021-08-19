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
    }

    clearBar.classList.add("hidden");
}
export function restoreHistory(element){ //incomplete
    let back=element.childNodes[1].innerText;
    back=back.slice(0,back.length-1);
    let main=element.childNodes[3].innerText;
    main=main.replace(",","");

    back=Number(back);
    main=Number(main);
    console.log(back, main);
}
export function removeMemoryItem(item){
    let section = document.querySelector(".MemorySection");
    section.removeChild(item);
    if(section.childNodes.length == 3){
        document.querySelector(".recycleBin").classList.add("hidden");
        section.innerHTML=`<div class="clearMsg">There's nothing saved in memory</div>`;
    }
}
export function plusMemoryItem(item){ //incomplete
    console.log(item);
}
export function minusMemoryItem(item){ //incomplete
    console.log(item);
}




