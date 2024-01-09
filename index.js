let inputANode = document.querySelector('.input-a');
let inputBNode = document.querySelector('.input-b');
let selectOperationNode = document.querySelector('#symbols');
let btnNode = document.querySelector('.btn-result');


//Функции основных математические уравнения
function sum(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiplication(a, b) {
    return a * b;
};
function division(a, b) {
    return a / b;
};

function exponentiation(a, b) {
    return a ** b;
};


const OPERATIONS = {
    sum: "+",
    subtract: "-",
    multiplication: "*",
    division: "/",
    exponentiation: "**",
};
function calculate({a, b, operation}) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b)
            break;
        case OPERATIONS.subtract:
            result = subtract(a, b)
            break;
        case OPERATIONS.multiplication:
            result = multiplication(a, b)
            break;
        case OPERATIONS.division:
            result = division(a, b)
            break;
        case OPERATIONS.exponentiation:
            result = exponentiation(a, b)
            break;
        default:
            break;
    }
    return result;
}


btnNode.addEventListener('click', function () {
    let a = Number(inputANode.value);
    let b = Number(inputBNode.value);
    let operation = selectOperationNode.value;
    let result = calculate({a,b,operation});
    console.log(result)
})





console.log(2 ** 2)