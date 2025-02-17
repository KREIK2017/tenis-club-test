const swiper = new Swiper('.mySwiper', {
    loop: false, // Відключаємо loop
    effect: "fade",
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.carousel-custom-next',
        prevEl: '.carousel-custom-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 400, // Додаємо плавний перехід, час у мілісекундах
    on: {
        init: function () {
            updateSlideNumber(this);
            updateProgressBar(this);
        },
        slideChange: function () {
            updateSlideNumber(this);
            updateProgressBar(this);
        }
    }
});

function updateSlideNumber(swiper) {
    const currentIndex = swiper.realIndex + 1; // Поточний слайд (з урахуванням індексації)
    const currentSlideElement = swiper.slides[swiper.realIndex].querySelector('.current-slide');
    currentSlideElement.textContent = String(currentIndex).padStart(2, '0');
}

function updateProgressBar(swiper) {
    const totalSlides = swiper.slides.length; 
    const currentIndex = swiper.realIndex + 1;
    const progressWidth = (currentIndex / totalSlides) * 100;

    // Знайти поточний прогрес-бар на поточному слайді
    const progressFill = swiper.slides[swiper.realIndex].querySelector('.progress-fill');
    progressFill.style.width = progressWidth + "%";
}
