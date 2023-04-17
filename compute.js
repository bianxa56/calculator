$(function() {
    $("#btn-equals").click(function() {
        var input = $("#input").text()
        if (isNaN(input)) {
            if (input.includes("%"))
                remainder(input)
            if (input.includes("+"))
                add(input)
            if (input.includes("-"))
                subtract(input)
            if (input.includes("x"))
                multiply(input)
            if (input.includes("/"))
                divide(input)
        } else {
            $("#answer").text(input)
        }

    })
})

function remainder(input) {
    var { num1, num2 } = parseOperands(input, "%")
    var value = num1 % num2
    $("#answer").text(value)
}

function add(input) {
    var { num1, num2 } = parseOperands(input, "+")
    var sum = num1 + num2
    $("#answer").text(sum)
}

function subtract(input) {
    var { num1, num2 } = parseOperands(input, "-")
    var difference = num1 - num2
    $("#answer").text(difference)
}

function multiply(input) {
    var { num1, num2 } = parseOperands(input, "x")
    var product = num1 * num2
    $("#answer").text(product)
}

function divide(input) {
    var { num1, num2 } = parseOperands(input, "/")
    var qoutient = num1 / num2
    $("#answer").text(qoutient)
}

function parseOperands(input, operator) {
    var operands = input.split(operator)
    var num1 = parseFloat(operands[0])
    var num2 = parseFloat(operands[1])
    return { num1, num2 }
}

