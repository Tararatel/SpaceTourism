const burger = document.querySelector('.header__wrapper__burger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.header__wrapper__navigation');

function toggleMenu() {
	menu.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
