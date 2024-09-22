import validacion from "./validacion.js";

const experienceContainer = document.getElementById('experience-container');

function upExperience() {
	var div, a, img, div1, h2, h3, div2, span1, a1, button1, span2, a2, button2;
	const experienceItems = [
		{
			id: 'item-juego-secreto',
			src: 'assets\\images\\jpg\\juego_secreto.jpg',
			href1: 'https://github.com/jissbossh/',
			href2: 'https://github.com/jissbossh/',
			href3: 'https://github.com/jissbossh/',
			class1: 'experience__box',
			class2: 'experience__img',
			class3: 'experience__info',
			class4: 'experience__title',
			class5: 'experience__text',
			class6: 'experience__description',
			class7: 'experience__repo',
			class8: 'experience__demo',
			innerText1: 'Juego del Numero Secreto',
			innerText2: 'Challenge Oracle One',
			innerText3: 'Repositório',
			innerText4: 'Ver demo'
		},
		{
			id: 'item-alura-play',
			src: 'assets\\images\\jpg\\aluraplay.jpg',
			href1: 'https://github.com/jissbossh/',
			href2: 'https://github.com/jissbossh/',
			href3: 'https://github.com/jissbossh/',
			class1: 'experience__box',
			class2: 'experience__img',
			class3: 'experience__info',
			class4: 'experience__subtitle',
			class5: 'experience__text',
			class6: 'experience__description',
			class7: 'experience__repo',
			class8: 'experience__demo',
			innerText1: 'Alura Play',
			innerText2: 'Challenge Oracle One',
			innerText3: 'Repositório',
			innerText4: 'Ver demo'
		}
	];
	experienceItems.forEach(item => {
		div = document.createElement('div');

		a = document.createElement('a');
		img = document.createElement('img');

		div1 = document.createElement('div');
		h2 = document.createElement('h2');
		h3 = document.createElement('h3');

		div2 = document.createElement('div');
		span1 = document.createElement('span');
		a1 = document.createElement('a');
		button1 = document.createElement('button');
		span2 = document.createElement('span');
		a2 = document.createElement('a');
		button2 = document.createElement('button');

		div.classList.add(item.class1);
		a.href = item.href1;

		img.classList.add(item.class2);
		img.src = item.src;

		div1.classList.add(item.class3);

		h2.classList.add(item.class4);

		h3.classList.add(item.class5);

		div2.classList.add(item.class6);

		span1.classList.add(item.class7);
		span2.classList.add(item.class8);

		h2.innerText = item.innerText1;
		h3.innerText = item.innerText2;

		button1.innerText = item.innerText3;
		button2.innerText = item.innerText4;

		a.target = '_blank';
		a.appendChild(img);

		a1.href = item.href2;
		a1.target = '_blank';
		a1.appendChild(button1);
		span1.appendChild(a1);

		a2.href = item.href3;
		a2.target = '_blank';
		a2.appendChild(button2);
		span2.appendChild(a2);

		div2.appendChild(span1);
		div2.appendChild(span2);

		div1.appendChild(h2);
		div1.appendChild(h3);
		div1.appendChild(div2);

		div.appendChild(a);
		div.appendChild(div1);

		experienceContainer.appendChild(div);
	});
}

export default {
	upExperience
};

// import validacion from "./validacion.js";

// const experienceContainer = document.getElementById('experience-container');

// function upExperience(){
//     var div, ul, li1, li2,li3, img;
// 	const experienceItems = [
// 		{
// 			id: 'item-sena',
// 			src: 'assets\\images\\png\\sena.png',
// 			class1: 'experience__box',
// 			class2: 'experience__img',
// 			class3: 'experience__name',
//             class4: 'experience__date',
// 			innerText1: 'ADSI',
//             innerText2: '2015'
// 		},
// 		{
// 			id: 'item-alura',
// 			src: 'assets\\images\\png\\alura.png',
// 			class1: 'experience__box',
// 			class2: 'experience__img',
// 			class3: 'experience__name',
//             class4: 'experience__date',
// 			innerText1: 'Desarrollo Web Font End',
//             innerText2: 'En curso'
// 		}
// 	];
// 	experienceItems.forEach(item => {
// 		div = document.createElement('div');
// 		ul = document.createElement('ul');
// 		li1 = document.createElement('li');
// 		li2 = document.createElement('li');
//         li3 = document.createElement('li');
// 		img = document.createElement('img');

// 		div.id = item.id;
// 		div.classList.add(item.class1);
// 		li1.classList.add(item.class2);
// 		li2.classList.add(item.class3);
// 		li3.classList.add(item.class4);
// 		li2.innerText = item.innerText1;
//         li3.innerText=`${item.innerText2} - ${validacion.capitalizarText(item.id.replace('item-', ''))}`;
// 		img.src = item.src;

// 		console.log(item.class1);
// 		li1.appendChild(img);
// 		ul.appendChild(li1);
// 		ul.appendChild(li2);
// 		ul.appendChild(li3);
// 		div.appendChild(ul);
// 		//experienceContainer.appendChild(div);
// 	});
// }

// export default{
//     upExperience
// };
