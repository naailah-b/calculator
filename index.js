let nums = [];
let ops = ['+', '-', '*', '/'];
let displayArray = [];
let res = document.querySelector('#result');
let nope = document.querySelector('#wrong');

document.getElementById('calc').addEventListener('click', calculate);
document.querySelector('#clear').addEventListener('click', clear);

function clear() {
    displayArray = [];
    nums = [];
    res.textContent = '';
    nope.textContent = '';
}

function calculate() {
    let string = displayArray.join('');
    let expressions = [];
    let counter = 0;
    if (string.includes('*')) {
        // gets a set of two numbers, takes the first set if multiples
        let index = string.indexOf('*');
        let start = index - 1;
        let end = index + 2;
        let expr = string.substring(start, end);
        expressions.push(expr);
    }
    


    let prob = Function('return ' + string)();
    clear();
    res.textContent = prob;
}

function display(num) {
    let div = document.createElement('div');
    div.textContent = num;
    div.id = 'numbox';
    res.appendChild(div);
}

for (j = 0; j < 10; j++) {
    nums.push(j);
}

ops.forEach((e) => {
    document.getElementById(e).addEventListener('click', () => {
        if(displayArray === undefined || displayArray == 0) {
            nope.textContent = 'cannot operate on nothing';
            res.textContent = '';
        }
        else {
            displayArray.push(e);
            display(e)
        }
    })
})

nums.forEach((e) => {
    document.getElementById(e).addEventListener('click', () => {
        if (displayArray === undefined || displayArray == 0) {
            res.textContent = ' ';
        }
        nope.textContent = ''
        displayArray.push(e);
        display(e);
    })
})

