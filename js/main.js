$(function() {
    $('.faq-item__control').on('click', function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle('200');
    })
    
    $('.agreement-style').styler();
    $('.weights-style').styler();
    $('.size-style').styler();

    $('.menu__icon').on('click', function() {
        $(this).toggleClass('menu__icon--active');
        $(this).next().toggleClass('menu__body--active');
        $('body').toggleClass('no-scroll');
        
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('header').addClass('header--scroll');
        } else {
            $('header').removeClass('header--scroll');
        }
    });   

    $(window).on('resize', function() {
        if ($(this).width() <= 768) {
            $('.popup-rations__category').after($('.popup-rations__images'));
            $('.popup-rations__form-wrapper').after($('.popup-rations__form-price'));
        }
        if ($(this).width() <= 617) { 
            $('.popup-calculate__desc').after($('.popup-calculate__messangers'));
        }
    });

    $('.open-popup--rations').on('click', function(e) {
        e.preventDefault();
        $('.popup-rations').fadeIn(400);
        $('body').addClass('no-scroll');
        $('.popup-rations__category').show();
        $('.popup-rations__title').show();
        $('.popup-rations__content-form').hide();
        $('.popup-rations__content-thanks').hide();
        $('.popup-rations__content-text').show();
        $('.popup-rations__img-list').show();
    });

    $('.open-popup--calculate').on('click', function(e) {
        e.preventDefault();
        $('.popup-calculate').fadeIn(400);
        $('body').addClass('no-scroll');
    });
    
    
    $('.close-popup').on('click', function() {
        $('.popup').fadeOut(400);
        $('body').removeClass('no-scroll');
    });

    $('.popup-rations__btn').on('click', function() {
        $('.popup-rations__category').show();
        $('.popup-rations__title').show();
        $('.popup-rations__content-text').hide();
        $('.popup-rations__content-form').show();
        $('.popup-rations__img-list').hide();
    });

    $('.form-counter__plus').on('click', function() {
        let number = $('.form-counter__number').text();
        number++;
        $('.form-counter__number').text(number);
    });

    $('.form-counter__minus').on('click', function() {
        let number = $('.form-counter__number').text();
        number > 1 && number--;
        $('.form-counter__number').text(number);
    });

    $('.popup-rations__btn-submit').on('click', function(e) {
        e.preventDefault();
        $('.popup-rations__content-form').hide();
        $('.popup-rations__title').hide();
        $('.popup-rations__category').hide();
        $('.popup-rations__content-thanks').show();
    });

    $('.open-popup--thanks').on('click', function(e) {
        e.preventDefault();
        if ($(this).attr('class').includes('popup-calculate__form-btn')) {
            $('.popup-calculate').fadeOut(400);
        } 
        $('.popup-thanks').fadeIn(400);
        $('body').addClass('no-scroll');
    }); 

    $('.barf-system__slider').slick({
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 541,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false
                }
            }
        ]
    });  

    $('.rations-slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1181,
                settings: {
                    dots: true,
                    slidesToShow: 3
                        
                }
            },
            {
                breakpoint: 911,
                settings: {
                    dots: true,
                    slidesToShow: 2.1                  
                }
            },
            {
                breakpoint: 641,
                settings: {
                    dots: true,
                    slidesToShow: 1.1
                }
            },
            {
                breakpoint: 371,
                settings: {
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });  
});