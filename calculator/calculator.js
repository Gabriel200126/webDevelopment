function calculator() {
    let number1 = parseInt(document.querySelector("#number-1").value);
    let number2 = parseInt(document.querySelector("#number-2").value);
    let operator = document.querySelector("#operator").value;
    let calculate;
    if (operator == "+") {
        calculate = number1 + number2;
    } else if (operator == "-") {
        calculate = number1 - number2;
    } else if (operator == "/") {
        calculate = number1 / number2;
    } else if (operator == "*") {
        calculate = number1 * number2;
    }

    document.querySelector("#result").innerHTML = calculate;
}
