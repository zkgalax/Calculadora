function numeros(mensaje) {
    const num1 = document.getElementById("pantalla2");
    let ultimoCaracter = num1.value.slice(-1);
    const operadores = ["+", "-", "x", "/"];
    if (operadores.includes(mensaje) && operadores.includes(ultimoCaracter)) {
        return;
    }
    num1.value += mensaje;  
}
function operacion() {
    const pantalla2 = document.getElementById("pantalla2");
    if (pantalla2.value === "") {
        pantalla2.value = "Ingrese una operación por favor.";
        return;
    }
    else if (pantalla2.value.includes("/0")) {
        pantalla2.value = "Error: No se puede dividir por 0.";
        return;
    }
    try {
        let expresionCorregida = pantalla2.value.replaceAll('x', '*');
        pantalla2.value = eval(expresionCorregida);
    } catch (error) {
        pantalla2.value = "Error: Ingrese una operación válida.";
    }
}
function BorrarUnoPorUno() {
    const borrar = document.getElementById("pantalla2");
    borrar.value = borrar.value.slice(0, -1)
}
function BorrarTodo() {
    const borrar = document.getElementById("pantalla2");
    borrar.value = "";
}