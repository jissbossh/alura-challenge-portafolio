import validacion from "./validacion.js";

const educationContainer = document.getElementById('education-container');

function upEducation() {
	var div, ul, li1, li2,li3, img;
	const educationItems = [
		{
			id: 'item-sena',
			src: 'assets\\images\\png\\sena.png',
			class1: 'education__box',
			class2: 'education__img',
			class3: 'education__name',
            class4: 'education__date',
			innerText1: 'ADSI',
            innerText2: '2015'
		},
		{
			id: 'item-alura',
			src: 'assets\\images\\png\\alura.png',
			class1: 'education__box',
			class2: 'education__img',
			class3: 'education__name',
            class4: 'education__date',
			innerText1: 'Desarrollo Web Font End',
            innerText2: 'En curso'
		}
	];
	educationItems.forEach(item => {
		div = document.createElement('div');
		ul = document.createElement('ul');
		li1 = document.createElement('li');
		li2 = document.createElement('li');
        li3 = document.createElement('li');
		img = document.createElement('img');

		div.id = item.id;
		div.classList.add(item.class1);

		li1.classList.add(item.class2);
		li2.classList.add(item.class3);
		li3.classList.add(item.class4);
		li2.innerText = item.innerText1;
        li3.innerText=`${item.innerText2} - ${validacion.capitalizarText(item.id.replace('item-', ''))}`;
		img.src = item.src;

		console.log(item.class1);
		li1.appendChild(img);
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		div.appendChild(ul);
		educationContainer.appendChild(div);
	});
}

export default {
	upEducation
};
