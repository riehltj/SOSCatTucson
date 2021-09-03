var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        500: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        770: {
            slidesPerView: 5,
            spaceBetween: 0
        },
        1100: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});