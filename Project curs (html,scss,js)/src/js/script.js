jQuery(function($){
    "use strict"

    /*header slider*/
    if($('.header__body').length){
        $('.header__body').slick({
            vertical: true,
            arrows: false,
            dots: true
        });
    }
    
    /*best offers carusel*/
    if($('.video__best-columns').length){
        $('.video__best-columns').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,

            appendArrows: $('.video__best-slider'),
            prevArrow: '<div class="video__best-left"><img src="img/video-block/arrow_left-icon.png" alt="icon"></div>',
            nextArrow: '<div class="video__best-right"><img src="img/video-block/arrow_right-icon.png" alt="icon"></div>'
        });
    }

    /*BLOG slide*/
    //people
    if($('.blog__column2-sblock-peoples').length){
        $('.blog__column2-sblock-peoples').slick({
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            leftMode: true,
            variableWidth: true,

            appendArrows: $('.blog__column2-sblock'),
            prevArrow: '<div class="blog__column2-sblock-btnleft"><p><i class="fas fa-arrow-left"></i></p></div>',
            nextArrow: '<div class="blog__column2-sblock-btnright"><p><i class="fas fa-arrow-right"></i></p></div>'
          });

          //content to top
          $('.blog__column2-sblock-peoples').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var tabs_container = $('.blog__column2-tblock');

            tabs_container.find($('.blog__column2-tcontent')).hide();
            tabs_container.find($('.tab-' + nextSlide)).show();
          });
    }
    
    /*info coments*/
    if($('.info__block-rcoments-user').length){
        $('.info__block-rcoments-user').slick({
            vertical: true,

            appendArrows: $('.info__block-rbtn'),
            prevArrow: '<div class="info__block-rbtn-top"><span><i class="fas fa-arrow-circle-up"></i></span></div>',
            nextArrow: '<div class="info__block-rbtn-bot"><span><i class="fas fa-arrow-circle-down"></i></span></div>'
        });
    }
    /*blog image poppup*/
    if($('.tblock-image').length){
        $('.tblock-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            image: {
            verticalFit: false
          }
          });
    }

    //video block
    if($('.video__play-icon').length){
        $('.video__play-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
          });
    }
    
});