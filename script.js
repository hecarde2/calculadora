let numero1 = "";
let numero2 = "";
let signo = "";


function agregar(valor) {

   
    if (valor === "+") {
        signo = "+";
    }
    
    else if (valor === "-") {
        signo = "-";
    }
   
    else if (valor === "*") {
        signo = "*";
    }
   
    else if (valor === "/") {
        signo = "/";
    }
    
    else {

        
        if (signo === "") {
            numero1 = numero1 + valor;
        }
        
        else {
            numero2 = numero2 + valor;
        }
    }

    
    mostrar();
}


function mostrar() {
    document.getElementById("p1").textContent = numero1;
    document.getElementById("p2").textContent = signo;
    document.getElementById("p3").textContent = numero2;
}


function limpiar() {
    numero1 = "";
    numero2 = "";
    signo = "";

    mostrar();
}


function calcular() {

    let n1 = Number(numero1);
    let n2 = Number(numero2);
    let resultado = 0;

    if (signo === "+") {
        resultado = n1 + n2;
    }
    else if (signo === "-") {
        resultado = n1 - n2;
    }
    else if (signo === "*") {
        resultado = n1 * n2;
    }
    else if (signo === "/") {
        resultado = n1 / n2;
    }

    
    numero1 = resultado;
    numero2 = "";
    signo = "";

    mostrar();
}