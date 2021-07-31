
const operators = ['+', '-', '/', '*']
let num1
let num2
let op

function setBoxData(data) {
    inputElement = document.getElementById("input-output-box")
    theNum = data.getAttribute("data-string");
    inputData = document.getElementById("input-output-box").value;

    if (theNum != '.' || !(inputData.includes(theNum))) {
        inputData += theNum
        document.getElementById("input-output-box").value = inputData

    }
}
function calculateAnswer() {

    inputData = document.getElementById("input-output-box").value;
    let len = inputData.length
    for (i = 0; i < len; i++) {
        console.log(inputData[i])
        console.log(inputData.slice(0, i - 1))
        if (operators.includes(inputData[i])) {
            console.log(inputData.slice(0, i))
            num1 = parseInt(inputData.slice(0, i), 10)
            console.log(num1)
            num2 = parseInt(inputData.slice(i + 1, len), 10)
            op = inputData[i]
            break;
        }
    }
    if (!num1) {
        console.log(num1)
        alert("Please enter the number.");
        return 0
    } else if (!op) {
        alert("Please enter operator and operand.");
        return 0
    } else if (!num2) {
        alert("Please enter operand.");
        return 0
    } else {
        if (op == '+') {
            inputData = num1 + num2
        } else if (op == '-') {
            inputData = num1 - num2
        } else if (op == '*') {
            inputData = num1 * num2
        } else if (op == '/') {
            if (num2 != 0) {
                inputData = num1 / num2
            }
            else {
                alert("Can't divide by zero.");
                return 0
            }
        }

        document.getElementById("input-output-box").value = inputData
    }




}