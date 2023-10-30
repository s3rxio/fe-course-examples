const display = document.querySelector('.calculator__display');
const controlButtons = document.querySelector('.controls').children;
const allSymbols = ['+', '-', 'X', '÷', '%', 'C', '='];

let firstValue = '';
let secondValue = '';
let symbol = '';

const calculate = (operator) => {
    let result;

    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    switch (operator) {
        case "+":
            result = firstValue + secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "X":
            result = firstValue * secondValue;
            break;
        case "÷":
            result = firstValue / secondValue;
            break;
        case "%":
            result = firstValue % secondValue;
            break;
        default:
            break;
    }

    return result;
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const {innerText: btnValue} = button; /* Берем значение кнопки*/
        const btnValueIsSymbol = allSymbols.includes(btnValue); /* Проверяем, введенное значение символ? (+,-, и тп)*/

        if (!secondValue && btnValue === '=') { /* Если текущая кнопка "=", но мы не ввели вторую кнопку, то просто возвращаем первое введенное значение*/
            return firstValue;
        }

        if (btnValue === 'C') {  /* Если нажали кнопку 'C', то зачищаем всё*/
            firstValue = '';
            secondValue = '';
            symbol = '';

            return display.innerText = '';
        }

        if (firstValue && btnValueIsSymbol) {
            if (secondValue) {
                /* В случае когда мы ввели оба значения и у нас уже введен знак. Производим расчёт (берем текущую операцию из переменной symbol)*/
                const result = calculate(symbol);
                display.innerText = result;
                firstValue = result;
                secondValue = '';
            }

            symbol = btnValue;
        } else if (!symbol) { // Если нет символа, это означает, что юзер все еще вводит первое значение
            firstValue += btnValue;
        } else if (symbol) { // Если есть символ, это означает, что юзер закончил вводить первое значение и значит ввод второе
            secondValue += btnValue;
        }

        // Не показывать знак = в выводе
        if (btnValue !== '=') {
            display.innerText += btnValue;
        }
    })
}
