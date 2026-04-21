let num1 = "";
let num2 = "";
let operador = "";

function agregar(valor) {

    if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
        operador = valor;
        document.getElementById("pantalla").value += valor;
    } else {
        if (operador === "") {
            num1 += valor;
        } else {
            num2 += valor;
        }
        document.getElementById("pantalla").value += valor;
    }
}

function limpiar() {
    num1 = "";
    num2 = "";
    operador = "";
    document.getElementById("pantalla").value = "";
}

function calcular() {
    let resultado = 0;

    if (operador === "+") {
        resultado = parseFloat(num1) + parseFloat(num2);
    }
    if (operador === "-") {
        resultado = parseFloat(num1) - parseFloat(num2);
    }
    if (operador === "*") {
        resultado = parseFloat(num1) * parseFloat(num2);
    }
    if (operador === "/") {
        resultado = parseFloat(num1) / parseFloat(num2);
    }

    document.getElementById("pantalla").value = resultado;
}