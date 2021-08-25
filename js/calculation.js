//the variable
let isFunctionCall = false;
let isAfterDot = false;

export function MainMachine(symbol){
    let tempHistory=document.querySelector(".tempHistory");
    let input=document.querySelector(".input");
    if(!isFunctionCall){
        if(tempHistory.innerHTML!=``){
            tempHistory.innerHTML+=` ${symbol} ${input.innerHTML}`;
        }
        else{
            tempHistory.innerHTML=input.innerHTML+` ${symbol}`;
        }
    }
    else{
        
    }
}
export function Clear(isCE){
    let input=document.querySelector(".input");
    let tempHistory=document.querySelector(".tempHistory");
    if(!isCE){
        tempHistory.innerHTML=``;
        input.innerHTML=`0`;
    }
    else{
        input.innerHTML=`0`;
    }

    isAfterDot=false;
    isFunctionCall=false;
}
export function ToggleSign(){
    document.querySelector(".input").innerHTML =
            Number(document.querySelector(".input").innerHTML) * -1;
}
export function BackSpace(){
    let input=document.querySelector(".input");
    if(input.innerHTML.length>1){
        input.innerHTML = input.innerHTML.slice(0 , input.innerHTML.length-1);
    }
    else{
        input.innerHTML=`0`;
    }
}
export function GetDigit(digit){
    let input = document.querySelector(".input");
    if(input.innerHTML==`0`){
        input.innerHTML=``;
    } 
    if(isFunctionCall){
        input.innerHTML=String(digit);
        isFunctionCall=false;
    }
    else{
        input.innerHTML+=String(digit);
    }
}
export function DecimalDot(){
    let input = document.querySelector(".input");
    if(!isAfterDot){
        input.innerHTML+=`.`;
        isAfterDot=true;
    }
}
export function Percent(){
    let input = document.querySelector(".input");
    let tempHistory = document.querySelector(".tempHistory");

    if(!isFunctionCall){
        input.innerHTML=(Number(input.innerHTML) / 100);
        tempHistory.innerHTML+=` ${input.innerHTML}`;
        isFunctionCall=true;
    }
}