const hobbiesContainer = document.getElementById('hobbies-container');
function upHobbies() {
    var div, ul, li1, li2, img;
	const hobbiesItems = [
		{
			id: 'item-libros',
			src: 'assets\\images\\png\\leer.png',
			class1: 'hobbies__box',
			class2: 'hobbies__img',
			class3: 'hobbies__name',
			innerText: 'Libros'
		},
		{
			id: 'item-musica',
			src: 'assets\\images\\png\\musica.png',
			class1: 'hobbies__box',
			class2: 'hobbies__img',
			class3: 'hobbies__name',
			innerText: 'Música'
		},
		{
			id: 'item-series',
			src: 'assets\\images\\png\\tv.png',
			class1: 'hobbies__box',
			class2: 'hobbies__img',
			class3: 'hobbies__name',
			innerText: 'Séries'
		},
		{
			id: 'item-peliculas',
			src: 'assets\\images\\png\\film.png',
			class1: 'hobbies__box',
			class2: 'hobbies__img',
			class3: 'hobbies__name',
			innerText: 'Peliculas'
		},
		{
			id: 'item-cocinar',
			src: 'assets\\images\\png\\cook.png',
			class1: 'hobbies__box',
			class2: 'hobbies__img',
			class3: 'hobbies__name',
			innerText: 'Cocinar'
		}
	];
	hobbiesItems.forEach(item => {
		div = document.createElement('div');
		ul = document.createElement('ul');
		li1 = document.createElement('li');
		li2 = document.createElement('li');
		img = document.createElement('img');

		div.id = item.id;
		div.classList.add(item.class1);

		li1.classList.add(item.class2);
		li2.classList.add(item.class3);
		li2.innerText = item.innerText;

		img.src = item.src;

		console.log(item.class1);
		li1.appendChild(img);
		ul.appendChild(li1);
		ul.appendChild(li2);
		div.appendChild(ul);
		hobbiesContainer.appendChild(div);
	});

}

export default{
    upHobbies
};
