let a = ""
let operator = ""
let b = ""


function add(a, b) {
    let answer = (a + b);
    return answer
}


function subtract(a, b) {
    let answer = (a - b);

    return answer
}


function multiply(a, b) {
    let answer = (a * b);

    return answer
}


function divide(a, b) {
    let answer = (a / b);
    
    return answer
}


function operate (operator, a, b) {
    if (operator === "+") {
       return add(a, b)
    }
    else if (operator === "-") {
       return subtract(a, b)
    }
    else if (operator === "*") {
       return multiply(a, b)
    }
    else {
        return divide(a, b)
    }
}



const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (value === "clear") {
            display.textContent = "";
            a = "";
            b = "";
            operator = "";
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (a !== "" && operator === "") {
                operator = value;
                display.textContent += value;
            }
        } else if (value === "=") {
            if (operator === "/" && b === "0") {
                display.textContent = "Clear and try again silly! You can't do that!"
            } else {
                let result = operate(operator, Number(a), Number(b));
                let rounded = parseFloat(result.toFixed(2));
                display.textContent = rounded;
                a = display.textContent;
                b = "";
                operator = "";
            }

        } else {
            // If operator is not set, build a; else, build b
            if (operator === "") {
                a += value;
            } else {
                b += value;
            }
            display.textContent += value;
        }
    });
});



const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
    display.textContent
})
