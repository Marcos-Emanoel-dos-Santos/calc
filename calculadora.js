/*  CONST DE CADA BOTAO  */
const equal = document.querySelector("#equal")
const sum = document.querySelector("#sum")
const sub = document.querySelector("#sub")
const mult = document.querySelector("#mult")
const div = document.querySelector("#div")
const percent = document.querySelector("#percent")
const clear = document.querySelector("#clear")

const display = document.querySelector("#display-visor")

const calculo = document.querySelectorAll(".element")

/*  FUNÇAO CALCULAR TODA VEZ QUE ALGUEM CLICAR ALGUM BOTAO  */
calculo.forEach( (element) => {
    element.addEventListener("click", (event) => {
        calcular(event.target.textContent)
    })
})

var num = [];
var op;

/*  VERIFICA QUAL BOTAO FOI CLICADO  */
function calcular(digit){
    if(isNaN(digit) == false){
        /*  CASO UM NUMERO SEJA CLICADO, MOSTRA ELE NA TELA  */
        display.value = display.value + parseInt(digit);
    } else if(digit != "=" && digit != "C"){
        /*  CASO ALGUM OPERADOR SEJA CLICADO, COLOCA O NUMERO NUMA ARRAY E ABRE ESPACO PARA O PROXIMO  */
        num.push(display.value);
        display.value = "";
        op = digit;
    } else if(digit == "="){
        /*  CASO O OPERADOR SEJA "=" FAZ A CONTA  */
        num.push(display.value);
        math(num, op);
    } else {
        while(num.length > 0){
            /*  CASO O OPERADOR SEJA C, LIMPA O VISOR  */
            num.pop();
        }
        display.value = "";
    }
}

var res;

function math(num, op){ /* QUANDO IGUAL FOR APERTADO */
    if(op == "+"){  
        display.value = parseInt(num[0]) + parseInt(num[1]);
    } else if(op == "-"){
        display.value = parseInt(num[0]) - parseInt(num[1]);
    } else if(op == "*"){
        display.value = parseInt(num[0]) * parseInt(num[1]);
    } else if(op == "/"){
        display.value = parseInt(num[0]) / parseInt(num[1]);
    } else if(op == "%"){
        display.value = (parseInt(num[0])/100) * parseInt(num[1]);
    }
    /*  LIMPA A ARRAY num  */
    while(num.length > 0){
        num.pop();
    }
}
