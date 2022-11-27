const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListner('click', () => {
	navUL.classList.toggle('show');
});