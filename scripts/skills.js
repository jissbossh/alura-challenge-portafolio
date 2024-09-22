const skillsContainer = document.getElementById('skills-container');

function upSkills() {
	var div, ul, li1, li2, img;
	const skillsItems = [
		{
			id: 'item-html5',
			src: 'assets\\images\\png\\html5.png',
			class1: 'skills__box',
			class2: 'skills__img',
			class3: 'skills__name',
			innerText: 'HTML 5'
		},
		{
			id: 'item-css3',
			src: 'assets\\images\\png\\css-3.png',
			class1: 'skills__box',
			class2: 'skills__img',
			class3: 'skills__name',
			innerText: 'CSS 3'
		},
		{
			id: 'item-javascript',
			src: 'assets\\images\\png\\javascript.png',
			class1: 'skills__box',
			class2: 'skills__img',
			class3: 'skills__name',
			innerText: 'Javascript'
		},
		{
			id: 'item-php',
			src: 'assets\\images\\png\\php.png',
			class1: 'skills__box',
			class2: 'skills__img',
			class3: 'skills__name',
			innerText: 'PHP'
		},
		{
			id: 'item-C#',
			src: 'assets\\images\\png\\csharp.png',
			class1: 'skills__box',
			class2: 'skills__img',
			class3: 'skills__name',
			innerText: 'C#'
		},
		{
			id: 'item-java',
			src: 'assets\\images\\png\\java.png',
			class1: 'skills__box',
			class2: 'skills__img',
			class3: 'skills__name',
			innerText: 'Java'
		},
		{
			id: 'item-git',
			src: 'assets\\images\\png\\git.png',
			class1: 'skills__box',
			class2: 'skills__img',
			class3: 'skills__name',
			innerText: 'Git y GitHub'
		}
	];
	skillsItems.forEach(item => {
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
		skillsContainer.appendChild(div);
	});

}

export default {
	upSkills
};
