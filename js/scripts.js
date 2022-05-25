$(() => {

// Моб. меню
$('.mob_menu_btn').click((e) => {
	e.preventDefault()

	$('.mob_menu_btn').addClass('active')
	$('body').addClass('menu_open')
	$('header').addClass('show')
	$('.overlay').fadeIn(300)
})


$('header .close, .overlay').click((e) => {
	e.preventDefault()

	$('.mob_menu_btn').removeClass('active')
	$('body').removeClass('menu_open')
	$('header').removeClass('show')
	$('.overlay').fadeOut(300)
})


if (is_touch_device()) {
	$('header .menu .item.menu-item-has-children > a').addClass('touch_link')

	$('header .menu .item.menu-item-has-children > a').click(function (e) {
		const $dropdown = $(this).next()

		if ($dropdown.css('visibility') === 'hidden') {
			e.preventDefault()

			$('header .menu .sub_menu').removeClass('show')
			$dropdown.addClass('show')

			$('body').css('cursor', 'pointer')
		}
	})

	// Закрываем под. меню при клике за её пределами
	$(document).click((e) => {
		if ($(e.target).closest('.menu').length === 0) {
			$('header .menu .sub_menu').removeClass('show')

			$('body').css('cursor', 'default')
		}
	})


	// Закрытие моб. меню свайпом справо на лево
	let ts

	$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

	$('body').on('touchend', (e) => {
		let te = e.originalEvent.changedTouches[0].clientX

		if ($('body').hasClass('menu_open') && ts > te + 50) {
			// Свайп справо на лево
			$('.mob_header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('header').removeClass('show')
			$('.overlay').fadeOut(300)
		} else if (ts < te - 50) {
			// Свайп слева на право
		}
	})

}

})






