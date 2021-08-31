import * as main from "../js/main.js";

//the variable
let wait = false;
let SpecialWait = false;
let isAfterDot = false;
let TempHistory=[];
let isStart=true;

function MainMachine(symbol){
    let tempHistory=document.querySelector(".tempHistory");
    let input=document.querySelector(".input");
    
    if(!wait){
        if(SpecialWait){
            TempHistory.push(` ${symbol}`);
            SpecialWait=false;
        }
        else{
            switch(symbol){
                case "sqr":
                    TempHistory.push(` sqr(${input.innerHTML})`);
                    SpecialWait=true;
                    break;
                case "radical":
                    TempHistory.push(` &#8730;(${input.innerHTML})`);
                    SpecialWait=true;
                    break;
                case "cube":
                    TempHistory.push(` cube(${input.innerHTML})`);
                    SpecialWait=true;
                    break;
                case "DivideX":
                    TempHistory.push(` 1/(${input.innerHTML})`);
                    SpecialWait=true;
                    break;
                default:
                    TempHistory.push(` ${input.innerHTML} ${symbol}`);
            }
            wait=true;
        }
    }

    ShowTempHistory();
}
function RepeatedMath(result, sym, parted){
    switch(sym){
        case "+":
            result+=parted;
            break;
        case '-':
            result-=parted;
            break;
        case "&#10539;": //multiply symbol
            result*=parted;
            break;
        case "&#247;": //division symbol
            result/=parted;
            break;
        case "&#8730": //radical symbol
            result+=(Math.sqrt(parted));
            break;
        case "sqr":
            result+=(parted*parted);
            break;
        case "cube":
            result+=(parted*parted*parted);
            break;
        case "1/":
            result+=(1/parted);
            break;
    }
    return result;
}
function Calculator(isEnd){
    let result=0;
    let sym='+';
    TempHistory.forEach(item => {
        let parted=item.split(' ');
        let tempSym=parted[2];
        if(String(parted[1]).includes("(")){
            let temp=parted[1].split('(');
            tempSym=temp[0];
            temp=temp[1].split(')');
            parted=Number(temp[0]);
        }
        else{
            parted=Number(parted[1]);
        }
        
        result = RepeatedMath(result,sym,parted);
        
        sym=tempSym;
    });

    if(isEnd){
        let inputData=Number(document.querySelector(".input").innerHTML);
        result = RepeatedMath(result, sym, inputData);
    }

    return result;
}
function ShowTempHistory(){
    let tempHistory=document.querySelector(".tempHistory");
    tempHistory.innerHTML=``;
    TempHistory.forEach(item => {
        tempHistory.innerHTML+=item;
    });
}
function ClearTempHistory(){
    TempHistory.splice(0, TempHistory.length);
}
function isSybmol(input){
    let result=false;
    switch(input){
        case "+":
        case "-":
        case ";":
            result=true;
            break;
    }
    return result;
}
export function Clear(isCE){
    let input=document.querySelector(".input");
    let tempHistory=document.querySelector(".tempHistory");
    if(!isCE){
        tempHistory.innerHTML=``;
        input.innerHTML=`0`;
        ClearTempHistory();
    }
    else{
        input.innerHTML=`0`;
    }

    isAfterDot=false;
    wait=false;
    SpecialWait=false;
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
    main.GetLNC(digit);
    let input = document.querySelector(".input");
    if(isStart){
        input.innerHTML=``;
        isStart=false;
    }
    if(SpecialWait){
        TempHistory.pop();
        ShowTempHistory();
    }
    if(input.innerHTML==`0`){
        input.innerHTML=``;
    } 
    if(wait){
        input.innerHTML=String(digit);
        wait=false;
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

    let CalculatedNum=Calculator(false);
    SpecialWait=true;

    if(tempHistory.innerHTML=='' || CalculatedNum==0){
        input.innerHTML='0';
        return
    }

    let percented=Number(input.innerHTML) / 100;






    tempHistory.innerHTML+=` ${input.innerHTML}`;

    // if(!wait){
    //     input.innerHTML=(Number(input.innerHTML) / 100);
    //     tempHistory.innerHTML+=` ${input.innerHTML}`;
    //     wait=true;
    // }
}
export function Mul(){
    MainMachine(`&#10539;`);
}
export function Div(){
    MainMachine(`&#247;`);
}
export function Plus(){
    MainMachine(`+`);
}
export function Minus(){
    MainMachine(`-`);
}
export function Sqr(){
    let input = document.querySelector(".input");
    let tempHistory = document.querySelector(".tempHistory");

    let temp=Number(input.innerHTML);

    MainMachine(`sqr`);
    
    input.innerHTML=(temp*temp);
}
export function Cube(){

    let input = document.querySelector(".input");
    let tempHistory = document.querySelector(".tempHistory");

    let temp=Number(input.innerHTML);

    MainMachine(`cube`);

    input.innerHTML=(temp*temp*temp);
}
export function Radical(){
    let input = document.querySelector(".input");
    let tempHistory = document.querySelector(".tempHistory");

    let temp=Number(input.innerHTML);

    MainMachine(`radical`);

    input.innerHTML=Math.sqrt(temp);
}
export function DivideOnX(){
    let input = document.querySelector(".input");
    let tempHistory = document.querySelector(".tempHistory");

    let temp=Number(input.innerHTML);

    if(temp!=0){
        input.innerHTML=(1/temp);
        MainMachine(`DivideX`);
    }
    else{
        Finisher();
        input.innerHTML=`0`;
    }
}
export function Finisher(){
    let input = document.querySelector(".input");
    let tempHistory = document.querySelector(".tempHistory");
    
    input.innerHTML=Calculator(true);
    ClearTempHistory();

    isStart=true;
}