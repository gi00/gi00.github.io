function procesar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var accion = document.querySelector('input[name="accion"]:checked').value;
    var resultado = '';

    if (accion === "encriptar") {
        resultado = encriptar(texto);
    } else {
        resultado = desencriptar(texto);
    }

    document.getElementById("resultado").textContent = resultado;
}

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function copiarResultado() {
    var resultado = document.getElementById("resultado");
    var seleccion = window.getSelection();
    var rango = document.createRange();
    rango.selectNodeContents(resultado);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand("copy");
    seleccion.removeAllRanges();
}

