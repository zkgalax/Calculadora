function inputValor(sumavalor) {
    const pantalla = document.getElementById("Pantalla");
    const valorpantalla = pantalla.value;
    pantalla.value = valorpantalla + sumavalor;
}

function calcular() {
    const pantalla = document.getElementById("Pantalla");
    try {
        const resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = "Error";
    }
}

function borrar() {
    const pantalla = document.getElementById("Pantalla");
    pantalla.value = "";

}