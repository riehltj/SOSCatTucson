const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});