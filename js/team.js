(() => {
	let teamSwiper = new Swiper(".js-team-swiper", {
		slidesPerView: 1,
		grid: {
			rows: 1,
			fill: "row"
		},
		spaceBetween: 20,

		navigation: {
			nextEl: ".js-team-next",
			prevEl: ".js-team-prev",
			disabledClass: "team__swiper-btn--disabled"
		},

		breakpoints: {
			421: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30
			},

			1280: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 80
			}
		},

		a11y: false,
		keyboard: {
			enabled: true,
			onlyInViewport: true
		}, // можно управлять с клавиатуры стрелками влево/вправо

		// Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		slideVisibleClass: "slide-visible",

		on: {
			init: function () {
				this.slides.forEach((slide) => {
					if (!slide.classList.contains("slide-visible")) {
						slide.tabIndex = "-1";
					} else {
						slide.tabIndex = "";
					}
				});
			},
			slideChange: function () {
				this.slides.forEach((slide) => {
					if (!slide.classList.contains("slide-visible")) {
						slide.tabIndex = "-1";
					} else {
						slide.tabIndex = "";
					}
				});
			}
		}
	});
})();