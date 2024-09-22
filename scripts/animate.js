const text = "Hola, mi nombre es Jorge Sierra";
const titleBio = document.getElementById('title-bio');
let index = 0;

function writeText() {
    if (index < text.length) {
        titleBio.textContent += text.charAt(index);
        index++;
        setTimeout(writeText, 100); // Ajusta la velocidad aquí
    }
}

// Exporta todas las funciones como un objeto por defecto
export default {
    writeText
};


// Iniciar el efecto al cargar la página
//window.onload = writeText;
