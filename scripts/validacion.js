//Haz tú validación en javascript acá
function saludar() {
    alert('Hola en javascript');
}

function capitalizarText(text) {
	return text
		.split(' ')
		.map(palabra => {
			return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
		})
		.join(' ');
}

function otraFuncion() {
    console.log('Hola en javascript');
}

// Exporta todas las funciones como un objeto por defecto
export default {
    saludar,
    otraFuncion,
    capitalizarText
};
