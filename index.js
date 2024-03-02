document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const secondParagraph = document.getElementById("secondParagraph");

    toggleButton.addEventListener("click", function() {
        if (secondParagraph.classList.contains("d-none")) {
            secondParagraph.classList.remove("d-none");
            toggleButton.textContent = "Leer menos..";
        } else {
            secondParagraph.classList.add("d-none");
            toggleButton.textContent = "Leer más..";
        }
    });
});

function actualizarAnio() {
    var fecha = new Date();
    var anioActual = fecha.getFullYear();
    var elementoCopyright = document.getElementById("copyright");
    var texto = elementoCopyright.textContent;
    var nuevoTexto = texto.replace(/\d{4}/, anioActual);
    elementoCopyright.textContent = nuevoTexto;
}

// Llamar a la función para actualizar el año cuando la página cargue
actualizarAnio();