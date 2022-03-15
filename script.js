function operation (var1, var2, operator) {
    a = parseFloat(var1);
    b = parseFloat(var2);
    if (operator == '+') {
        if ((a+b) % 1 != 0) {
            return (a+b).toFixed(2);
        } else {
            return a+b;
        }
    } else if (operator == '-') {
        if ((a-b) % 1 != 0) {
            return (a-b).toFixed(2);
        } else {
            return a-b;
        }
    } else if (operator == 'x') {
        if ((a*b) % 1 != 0) {
            return (a*b).toFixed(2);
        } else {
            return a*b;
        }
    } else if (operator == '÷') {
        if ((a/b) % 1 != 0) {
            return (a/b).toFixed(2);
        } else {
        return (a/b);
        }
    }
}

const operationDisplay = document.querySelector('.operation');
const resultDisplay = document.querySelector('.result');

let displayText = operationDisplay.textContent;
let operator;
let pattern = /[+÷x-]/;
let plusPattern = /[+]/;
let subPattern = /[-]/;
let mulPattern = /[x]/;
let divPattern = /[÷]/;
let equalPattern = /[=]/;

function addNumber(number) {
    if (equalPattern.test(operationDisplay.textContent)) {
        operationDisplay.textContent = number;
    } else {
        operationDisplay.textContent += number;
    }
}

function add1() {
    addNumber(1);   
}

function add2() {
    addNumber(2);
}

function add3() {
    addNumber(3);
}

function add4() {
    addNumber(4);
}

function add5() {
    addNumber(5);
}

function add6() {
    addNumber(6);
}

function add7() {
    addNumber(7);
}

function add8() {
    addNumber(8);
}

function add9() {
    addNumber(9);
}

function add0() {
    addNumber(0);
}

function dot() {
    if (operationDisplay.textContent.length == 0) {
        operationDisplay.textContent = '0.';
    } else if (operationDisplay.textContent.length > 0) {
        if (operationDisplay.textContent[operationDisplay.textContent.length - 1] == '.') {
            return;
        } else if (isNaN(operationDisplay.textContent[operationDisplay.textContent.length-1])) {
            operationDisplay.textContent += '0.';
        } else {
            operationDisplay.textContent += '.';
        }
    }
}

function del() {
    operationDisplay.textContent = operationDisplay.textContent.slice(0, operationDisplay.textContent.length - 1);
}

function batata() {
    operationDisplay.textContent = '';
    resultDisplay.textContent = '';
}

function splitOp() {
    let splitter = operationDisplay.textContent.search(pattern);
    let a = operationDisplay.textContent.slice(0, splitter);
    let b = operationDisplay.textContent.slice(splitter+1, operationDisplay.textContent.length);
    
    resultDisplay.textContent = operation(a, b, operator);
}

function equal() {
    if (pattern.test(operationDisplay.textContent)) {
        if (plusPattern.test(operationDisplay.textContent)) {
            operator = '+';
            splitOp();
            operationDisplay.textContent = a + '+' + b + '=';
        } else if (subPattern.test(operationDisplay.textContent)) {
            operator = '-';
            splitOp();
            operationDisplay.textContent = a + '-' + b + '=';
        } else if (mulPattern.test(operationDisplay.textContent)) {
            operator = 'x';
            splitOp();
            operationDisplay.textContent = a + 'x' + b + '=';
        } else if (divPattern.test(operationDisplay.textContent)) {
            operator = '÷';
            splitOp();
            operationDisplay.textContent = a + '÷' + b + '=';
        }
    } else {
        operationDisplay.textContent += '+'
    }
}

function plus() {
    if (pattern.test(operationDisplay.textContent)) {
        if (plusPattern.test(operationDisplay.textContent)) {
            operator = '+';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '+';
        } else if (subPattern.test(operationDisplay.textContent)) {
            operator = '-';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '+';
        } else if (mulPattern.test(operationDisplay.textContent)) {
            operator = 'x';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '+';
        } else if (divPattern.test(operationDisplay.textContent)) {
            operator = '÷';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '+';
        }
    } else {
        operationDisplay.textContent += '+'
    }
}

function sub() {
    if (pattern.test(operationDisplay.textContent)) {
        if (plusPattern.test(operationDisplay.textContent)) {
            operator = '+';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '-';
        } else if (subPattern.test(operationDisplay.textContent)) {
            operator = '-';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '-';
        } else if (mulPattern.test(operationDisplay.textContent)) {
            operator = 'x';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '-';
        } else if (divPattern.test(operationDisplay.textContent)) {
            operator = '÷';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '-';
        }
    } else {
        operationDisplay.textContent += '-'
    }
}

function mul() {
    if (pattern.test(operationDisplay.textContent)) {
        if (plusPattern.test(operationDisplay.textContent)) {
            operator = '+';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + 'x';
        } else if (subPattern.test(operationDisplay.textContent)) {
            operator = '-';
            splitOp();
            resultDisplay.textContent = operation(a, b, operator);
            operationDisplay.textContent = operation(a, b, operator) + 'x';
        } else if (mulPattern.test(operationDisplay.textContent)) {
            operator = 'x';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + 'x';
        } else if (divPattern.test(operationDisplay.textContent)) {
            operator = '÷';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + 'x';
        }
    } else {
        operationDisplay.textContent += 'x';
    }
}

function div() {
    if (pattern.test(operationDisplay.textContent)) {
        if (plusPattern.test(operationDisplay.textContent)) {
            operator = '+';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '÷';
        } else if (subPattern.test(operationDisplay.textContent)) {
            operator = '-';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '÷';
        } else if (mulPattern.test(operationDisplay.textContent)) {
            operator = 'x';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '÷';
        } else if (divPattern.test(operationDisplay.textContent)) {
            operator = '÷';
            splitOp();
            operationDisplay.textContent = operation(a, b, operator) + '÷';
        }
    } else {
        operationDisplay.textContent += '÷'
    }
}