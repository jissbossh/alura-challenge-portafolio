const profileContainer = document.getElementById('profile-container');
const imageProfile = document.getElementById('image-profile');
const networkItems= document.getElementById('title-network');

function writeText1() {
	if (index < text.length) {
		titleBio.textContent += text.charAt(index);
		index++;
		setTimeout(writeText, 100); // Ajusta la velocidad aquí
	}
}

function writeText(elementId, text) {
	let index = 0;
	index = 0; // Reinicia el índice cada vez que se llama a la función
	const element = document.getElementById(elementId);
	function type() {
		if (index < text.length) {
			element.textContent += text.charAt(index);
			index++;
			setTimeout(type, 100); // Ajusta la velocidad aquí
		}
	}
	type(); // Llama a la función interna para empezar a escribir
}

function writeText2(elementId, text) {
	let index = 0;
	index = 0; // Reinicia el índice cada vez que se llama a la función
	const element = document.getElementById(elementId);
	function type() {
		if (index < text.length) {
			//element.textContent += text.charAt(index);
			///console.log(text.charAt(index));
			index++;
			setTimeout(type, 100); // Ajusta la velocidad aquí
		}
	}
	type(); // Llama a la función interna para empezar a escribir
}

function addNetworkItems() {
	const items = ['Github', 'Linkedin', 'Currículo'];
	var li, a, img;
	items.forEach(function(item, index) {
		li = document.createElement('li');
		a = document.createElement('a');
		img = document.createElement('img');
		li.classList.add('title__network__item');
		a.id = item.toLowerCase().replace(/\s+/g, '-');
		a.href = `#${item}`;
		a.innerText = item;
		img.src = 'assets/images/png/arrow.png';
		img.width="9px";
		img.height="9px";
		a.appendChild(img);
		li.appendChild(a);
		//networkItems.appendChild(li);
		//console.log(`Índice: ${index}, Valor: ${item}`);
		//console.log(a.id);
		if (a.id === 'email') {
			a.href = '#contacto';
			a.innerHTML = email;
		}
	});

	let dicItems = [
		{
			id: 'github',
			class: 'title__network__item',
			href: 'https://github.com/jissbossh',
			src: 'assets/images/png/arrow01.png',
			target: '_blank',
			alt: 'Logo Arrow',
			innerText: 'Github'
		},
		{
			id: 'linkedin',
			class: 'title__network__item',
			href: 'https://www.linkedin.com/in/jissbossh',
			src: 'assets/images/png/arrow01.png',
			target: '_blank',
			alt: 'Logo Arrow',
			innerText: 'Linkedin'
		},
		{
			id: 'curriculo',
			class: 'title__network__item',
			href: 'assets/pdf/CV.pdf',
			src: 'assets/images/png/arrow01.png',
			target: '_blank',
			alt: 'Logo Arrow',
			innerText: 'Currículo'
		}
	];
	dicItems.forEach(item => {
		// console.log(`ID: ${item.id}, Href: ${item.href}, Inner Text: ${item.innerText}`);
		li = document.createElement('li');
		a = document.createElement('a');
		img = document.createElement('img');
		li.classList.add(item.class);
		a.id = item.id;
		a.href = item.href;
		a.target=item.target;
		a.innerText = item.innerText;
		img.src = item.src;
		img.alt = item.alt;
		img.style.width = '8px'; // Nuevo ancho
		img.style.height = 'auto';
		img.style.padding = '0px 2px 2px 2px';
		img.style.margin = '0px 2px 2px 2px';

		a.appendChild(img);
		li.appendChild(a);
		networkItems.appendChild(li);
	});
}

function upProfile() {
	const text = 'Hola, mi nombre es Jorge';
	const elementId = 'title-bio';
	writeText(elementId, text);
	//#region etiqueta region pade de toda la seccion de perfil
	profileContainer.classList.add('profile');
	//#region etiqueta img que contine la imagen del perfil
	imageProfile.src = 'assets/images/png/perfil.png';
	imageProfile.alt = 'Foto de Perfil';

	document.getElementById('title-subsection').textContent = 'Soy analista de sistemas y programador.';
	document.getElementById('title-subsection-content').textContent =
		'Actualmente estoy participando en el programa Oracle ONE en Alura Latam, lo cual me está brindando la oportunidad de ampliar mis capacidades, conocimientos y obtener una certificación legítima de mis habilidades en cuanto al desarrolo web.';

	addNetworkItems();
	//#endregion etiqueta region pade de toda la seccion de perfil

	//#endregion etiqueta img que contine la imagen del perfil
}

export default {
	upProfile
};
