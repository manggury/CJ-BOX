$(function () {

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.visual_slide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.news_slide').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $('.social_slide').slick({
        arrow: false,
        slidesToShow: 5,
    });

    $('.business_wrap .itm_box .itm').on('mouseenter', function () {
        $('.business_wrap .itm_box .itm').removeClass('on');
        $(this).addClass('on');
        $('.business_wrap .itm_box .itm .txt_box').removeClass('on');
        $('.business_wrap .itm_box .itm_box').addClass('on');
    })
})