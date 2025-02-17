document.addEventListener("DOMContentLoaded", function () {
    var swiper1 = new Swiper(".mySwiper2", {
        slidesPerView: 3, // Скільки карток видно одночасно
        spaceBetween: 20, // Відстань між картками
        loop: true, // Зациклювання слайдів
        navigation: {
            nextEl: ".card-custom-next",
            prevEl: ".card-custom-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function () {
        let parent = this.closest(".swiper-slide-card");
        parent.classList.toggle("expanded");
        if (parent.classList.contains("expanded")) {
            this.textContent = "Show Less";
        } else {
            this.textContent = "Read More";
        }
    });
});
