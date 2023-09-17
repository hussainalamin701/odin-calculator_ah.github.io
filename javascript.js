let currentOperation = '';
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

const calculator_buttons_list = document.querySelectorAll('.calc-button');
const calculator_operation_buttons_list = document.querySelectorAll('.operation-button');

const calc_buttons = document.getElementById('calc-button');
const calc_result = document.getElementById('calc-result');
const calc_result_store = document.getElementById('calc-result-store');

const calc_clear = document.getElementById('clear-button');
const calc_delete = document.getElementById('delete-button');
const calc_equals = document.getElementById('evaluate-button');

calculator_buttons_list.forEach((ele) => {

    ele.onclick = () => {
        if(currentOperation === ''){
            operandOne += ele.innerHTML;
            console.log("OP 1 : " + operandOne);
        }else{
            operandTwo += ele.innerHTML;
            console.log("OP 2 : " + operandTwo);
        }

        result = operandOne + currentOperation + operandTwo;
        calc_result.innerHTML = result;
    }
});

calculator_operation_buttons_list.forEach((ele) => {

    ele.onclick = () => {
        if(operandOne === '') return;
        else if(currentOperation === ''){
            currentOperation = ele.innerHTML;

            result = operandOne + currentOperation + operandTwo;
            calc_result.innerHTML = '';
            calc_result_store.innerHTML = result;
        }
    }

});

function numberPressed(){
    
}

function calculate(){
    if(operandOne === '' && operandTwo === '' && currentOperation === ''){
        return;
    }
    if(currentOperation === '/' && operandOne === '0'){
        calc_result.innerHTML = 'UNDEFINED';
        calc_result_store
        return;
    }

    result =  operate(operandOne, operandTwo, currentOperation);
    calc_result.innerHTML = result;
    calc_result_store.innerHTML = `${operandOne} ${currentOperation} ${operandTwo}`;
    
    operandOne = result;
    currentOperation = '';
    operandTwo = '';

}

function clearCalculations(){
    calc_result_store.innerHTML = 'PLACEHOLDER';
    calc_result.innerHTML = 'PLACEHOLDER';
    currentOperation = '';
    operandOne = '';
    operandTwo = '';
    result = '';
}

function operate(op1, op2 , operation){
    op1 = Number(op1);
    op2 = Number(op2);

    if(operation === '+'){
        console.log('Add');
        return add(op1, op2);
    }else if(operation === '-'){
        console.log('Subtract');
        return sub(op1, op2);
    }else if(operation === '/'){
        console.log('Divide');
        return div(op1, op2);
    }else if(operation === '*'){
        console.log('Multiply');
        return mul(op1, op2);
    }
}

function deleteCalculations(){
    let tmpOpOne = Number(operandOne);
    let tmpOpTwo = Number(operandTwo);
    let tmpOp = Number(currentOperation);

    if(operandOne === '' && operandTwo === '' && currentOperation === ''){
        return;
    }else if(operandOne !== '' && operandTwo === '' && currentOperation === ''){
    }
    calc_result.textContent = calc_result.textContent.substring(0,calc_result.innerHTML.length-1);
    console.log(calc_result.textContent);
}

calc_clear.onclick = () => clearCalculations();
calc_delete.onclick = () => deleteCalculations();
calc_equals.onclick = () => calculate(operandOne, operandTwo, currentOperation);