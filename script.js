const burger = document.querySelector('.header__wrapper__burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.header__wrapper__navigation');

function toggleMenu() {
	menu.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

const planet = document.querySelector('.planet');
const technology = document.querySelector('.technology__wrapper');
const crew = document.querySelector('.crew__wrapper');
const url = '../../data.json';

const getData = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

try {
	const data = await getData(url);
	data.forEach((el) => {
		if (el.id === +planet.getAttribute('data-id')) {
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

try {
	const data = await getData(url);
	data.forEach((el) => {
		if (el.id === +technology.getAttribute('data-id')) {
			technology.insertAdjacentHTML(
				'afterbegin',
				`
				<img class="technology__wrapper__img_tablet" src="${el.imgSrcTablet}" alt="${el.title}">
		  <nav class="technology__wrapper__links">
		    <a class="technology__wrapper__links__link ${el.id === 5 ? 'technology__wrapper__links__link_active' : ''}" href="${
					el.id === 5 ? '#' : './vehicle.html'
				}">1</a>
		    <a class="technology__wrapper__links__link ${el.id === 6 ? 'technology__wrapper__links__link_active' : ''}" href="${
					el.id === 6 ? '#' : './spacePort.html'
				}">2</a>
		    <a class="technology__wrapper__links__link ${el.id === 7 ? 'technology__wrapper__links__link_active' : ''}" href="${
					el.id === 7 ? '#' : './capsule.html'
				}">3</a>
		  </nav>
		  <div class="technology__wrapper__content">
		    <h3 class="technology__wrapper__content__terminology">THE TERMINOLOGY…</h3>
		    <h2 class="technology__wrapper__content__title">${el.title}</h2>
		    <p class="technology__wrapper__content__text">${el.description}</p>
		  </div>
		  <img class="technology__wrapper__img" src="${el.imgSrc}" alt="${el.title}" width="515">
			`
			);
		}
	});
} catch (error) {
	console.log(error.messagr);
}

try {
	const data = await getData(url);
	data.forEach((el) => {
		if (el.id === +crew.getAttribute('data-id')) {
			crew.insertAdjacentHTML(
				'afterbegin',
				`
				<div class="crew__wrapper__content">
					<h3 class="crew__wrapper__content__rank">${el.rank}</h3>
					<h2 class="crew__wrapper__content__name">${el.name}</h2>
					<p class="crew__wrapper__content__description">${el.description}</p>
					<nav class="crew__wrapper__content__navigation">
						<a href="${el.id === 8 ? '#' : './commander.html'}"><div class="round ${el.id === 8 ? 'round-active' : ''}"></div></a>
						<a href="${el.id === 9 ? '#' : './missionSpecialist.html'}"><div class="round ${
					el.id === 9 ? 'round-active' : ''
				}"></div></a>
						<a href="${el.id === 10 ? '#' : './pilot.html'}"><div class="round ${el.id === 10 ? 'round-active' : ''}"></div></a>
						<a href="${el.id === 11 ? '#' : './engeneer.html'}"><div class="round ${el.id === 11 ? 'round-active' : ''}"></div></a>
					</nav>
				</div>
				<img class="crew__wrapper__img" src="${el.imgSrc}" alt="${el.rank}" />
			`
			);
		}
	});
} catch (error) {
	console.log(error.messagr);
}
