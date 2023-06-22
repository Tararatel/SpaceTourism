const burger = document.querySelector('.header__wrapper__burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.header__wrapper__navigation');

function toggleMenu() {
	menu.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

const planet = document.querySelector('.planet');
console.log(planet);
const url = '../../data.json';

const getData = async () => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

try {
	const data = await getData();
	data.forEach((el) => {
		if (el.id == planet.getAttribute('data-id')) {
			planet.insertAdjacentHTML(
				'afterbegin',
				`
			<img src="${el.imgSrc}" alt="${el.title}" />
				<div class="planet__wrapper">
					<nav class="planet__wrapper__navigation links">
						<a class="${el.id === 1 ? 'active' : ''}" href="${el.id === 1 ? '#' : './moon.html'}">MOON</a>
						<a class="${el.id === 2 ? 'active' : ''}" href="${el.id === 2 ? '#' : './mars.html'}">MARS</a>
						<a class="${el.id === 3 ? 'active' : ''}" href="${el.id === 3 ? '#' : './europa.html'}">EUROPA</a>
						<a class="${el.id === 4 ? 'active' : ''}" href="${el.id === 4 ? '#' : './titan.html'}">TITAN</a>
					</nav>
					<div class="planet__wrapper__content">
						<h1>${el.title}</h1>
						<p>
							${el.description}
						</p>
					</div>
					<div class="planet__wrapper__facts">
						<div class="planet__wrapper__facts__1">
							<h4>AVG. DISTANCE</h4>
							<p>${el.distance}</p>
						</div>
						<div class="planet__wrapper__facts__2">
							<h4>Est. travel time</h4>
							<p>${el.time}</p>
						</div>
					</div>
				</div>
			`
			);
		}
	});
} catch (error) {
	console.log(error.messagr);
}
