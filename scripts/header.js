const titlePage = document.getElementById('title-page');
const menuTitle = document.getElementById('menu-title');
const menuLogo = document.getElementById('menu-logo');
const menuList = document.getElementById('menu-list');
const email='jorge7gt22@gmail.com';

function capitalizarText(text) {
	return text
		.split(' ')
		.map(palabra => {
			return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
		})
		.join(' ');
}

function addMenuItems() {
	const items = ['Sobre mi', 'Skills', 'Hobbies', 'Formación', 'Proyectos', 'email'];
	var li, a;
	items.forEach(function(item, index) {
		li = document.createElement('li');
		a = document.createElement('a');
		li.classList.add('menu__list__item');
		a.id = `item-${item.toLowerCase().replace(/\s+/g, '-')}`;
		a.href = `#${item.toLowerCase().replace(/\s+/g, '-').replace('ó', 'o')}`;
		a.innerText = item;
		li.appendChild(a);
		menuList.appendChild(li);
		//console.log(`Índice: ${index}, Valor: ${numero}`);
		// console.log(a.id);
        if(a.id === 'item-email' ){
            a.href = '#contact';
            a.innerHTML = email;
        }else if (a.id === 'item-proyectos' ) {
			a.href = '#experience';
		}
	});
}

function upHeader() {
	//menuTitle.textContent="Jorge Sierra";
	menuTitle.innerHTML = 'Jorge Ivan Sierra Suarez';
	menuLogo.src = 'assets/images/png/vector01.png';
	titlePage.innerHTML='Portafolio Profesional';
	addMenuItems();
}

export default {
	upHeader
};
