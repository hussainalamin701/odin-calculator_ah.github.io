let operation = '';

const calculator_buttons_list = document.querySelectorAll('.calc-button');

const calc_buttons = document.getElementById('calc-button');
const calc_result = document.getElementById('calc-result');

const calc_clear = document.getElementById('clear-button');
const calc_delete = document.getElementById('delete-button');

calculator_buttons_list.forEach((ele) => {
    ele.onclick = () => {
        console.log(ele.innerHTML);
        calc_result.textContent += ele.innerHTML;
    }
});

function clearCalculations(){
    calc_result.innerHTML = '';
}

function deleteCalculations(){
    calc_result.innerHTML = calc_result.innerHTML.substring(0,calc_result.innerHTML.length-1);
}

calc_clear.onclick = () => clearCalculations();
calc_delete.onclick = () => deleteCalculations();