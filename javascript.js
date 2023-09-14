let currentOperation = '';
let nextOperation = '';
let operandOne = '';
let operandTwo = '';
let result = '';

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function div(a, b){
    return a / b;
}

function mul(a, b){
    return a * b;
}

function pow(a, b){
    return Math.pow(a, b);
}

const calculator_buttons_list = document.querySelectorAll('.calc-button');
const calculator_operation_buttons_list = document.querySelectorAll('.operation-button');

const calc_buttons = document.getElementById('calc-button');
const calc_result = document.getElementById('calc-result');

const calc_clear = document.getElementById('clear-button');
const calc_delete = document.getElementById('delete-button');

calculator_buttons_list.forEach((ele) => {
    ele.onclick = () => {
        if(currentOperation === ''){
            operandOne += ele.innerHTML;
        }else if(currentOperation !== 'null' && nextOperation === ''){
            operandTwo += ele.innerHTML;
        }
        calc_result.textContent += ele.innerHTML;
    }
});

calculator_operation_buttons_list.forEach((ele) => {
    ele.onclick = () => {
        if(currentOperation === ''){
            currentOperation = ele.innerHTML;
            calc_result.textContent += ele.innerHTML;
            console.log(`Operation 1 : ${currentOperation}`);
        }else if(currentOperation !== '' && nextOperation === ''){
            nextOperation = ele.innerHTML;
            calc_result.textContent += ele.innerHTML;
            console.log(`Operation 2 : ${nextOperation}`);
        } else{
            return;
        }
    }
});

function operate(op1, op2 , operation){
    if(operation = '+'){
        add(op1, op2);
    }else if(operation = '-'){
        sub(op1, op2);
    }else if(operation = '/'){
        div(op1, op2);
    }else if(operation = '*'){
        mul(op1, op2);
    }
}

function updateDisplay(){

}

function calculate(){
    if(currentOperation === ''){
        console.log('No operation selected so far');
        result += operandOne;
    }
    
}

function clearCalculations(){
    calc_result.innerHTML = '';
    currentOperation = '';
    nextOperation = '';
    operandOne = '';
    operandTwo = '';
    result = '';
}

function deleteCalculations(){
    calc_result.innerHTML = calc_result.innerHTML.substring(0,calc_result.innerHTML.length-1);
}

calc_clear.onclick = () => clearCalculations();
calc_delete.onclick = () => deleteCalculations();