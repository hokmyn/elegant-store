function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#mobile-nav-btn');
	const navBtnClose = document.querySelector('#close-mobile-nav');
	const nav = document.querySelector('.mobile-nav');
	const mobileNavFade = document.querySelector('.mobile-nav__fade');

	navBtnOpen.onclick = function () {
		nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav__fade--open');

		document.body.classList.add('no-scroll');
	};

	navBtnClose.onclick = function () {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav__fade--open');
		document.body.classList.remove('no-scroll');
	};

	mobileNavFade.onclick = function () {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav__fade--open');
		document.body.classList.remove('no-scroll');
	};

}

export default mobileNav;