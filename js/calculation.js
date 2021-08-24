import * as Classes from "../js/classes.js";

export let temp = new Classes.Plus();

//the variable
let isFunctionCall = false;
let isAfterDot = false;

export function MainMachine(operation){
    let tempHistory=document.querySelector(".tempHistory");
    let input=document.querySelector(".input");
    if(tempHistory.innerHTML!=``){

    }
    else{
        tempHistory.innerHTML=input.innerHTML+` ${operation.Symbol} `;
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