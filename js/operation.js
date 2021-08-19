export function toggle(switchNum){
    let history=document.querySelector(".HistorySection");
    let memory=document.querySelector(".MemorySection");
    let clearBar=document.querySelector(".ClearBar");
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

