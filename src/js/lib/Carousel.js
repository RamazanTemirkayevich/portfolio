function Carousel() {
    function Sliders() {
        $('.skills-list').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '5px',
            autoplay: false,
            centerMode: true,
            autoplaySpeed: 3500,
            pauseOnHover: true,
            dots: true,
        });

        $(window).resize(function () {
            // Проверяем ширину экрана при изменении размера окна
            if ($(window).width() <= 768) {
                // Если экран 768 пикселей и ниже, и Slick Carousel инициализирован, отключаем его
                if ($(".skills-list").hasClass("slick-initialized")) {
                    $(".skills-list").slick("unslick");
                }
            } else {
                // Если экран выше 768 пикселей, и Slick Carousel не инициализирован, инициализируем его
                if (!$(".skills-list").hasClass("slick-initialized")) {
                    $('.skills-list').slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '5px',
                        autoplay: false,
                        centerMode: true,
                        autoplaySpeed: 3500,
                        pauseOnHover: true,
                        dots: true,
                    });
                }
            }
        });
    }

    Sliders();    
}

module.exports = Carousel