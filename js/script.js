$('.burger').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('burger_active');
	$('.header__menu').toggleClass('header__menu--active');
});