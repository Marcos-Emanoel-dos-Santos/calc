const equal = document.querySelector("#equal")
const sum = document.querySelector("#sum")
const sub = document.querySelector("#sub")
const mult = document.querySelector("#mult")
const div = document.querySelector("#div")
const percent = document.querySelector("#percent")
const clear = document.querySelector("#clear")

const display = document.querySelector("#display-visor")

const calculo = document.querySelectorAll(".element")

calculo.forEach( (element) => {
    element.addEventListener("click", (event) => {
        calcular(event.target.textContent)
    })
})

var num = [];
var op;

function calcular(digit){
    if(isNaN(digit) == false){
        display.value = display.value + parseInt(digit);
    } else if(digit != "=" && digit != "C"){
        num.push(display.value);
        display.value = "";
        op = digit;
    } else if(digit == "="){
        num.push(display.value);
        math(num, op);
    } else {
        while(num.length > 0){
            num.pop();
        }
        display.value = "";
    }
}

var res;
function math(num, op){ /* quando igual for apertado */
    if(op == "+"){  
        res = parseInt(num[0]) + parseInt(num[1]);
        display.value = res;
    } else if(op == "-"){
        res = parseInt(num[0]) - parseInt(num[1]);
        display.value = res;
    } else if(op == "*"){
        display.value = parseInt(num[0]) * parseInt(num[1]);
        res = display.value;
    } else if(op == "/"){
        display.value = parseInt(num[0]) / parseInt(num[1]);
        res = display.value;
    } else if(op == "%"){
        display.value = (parseInt(num[0])/100) * parseInt(num[1]);
        res = display.value;
    }
num[0] = res;
num.pop();
console.log(num);
}