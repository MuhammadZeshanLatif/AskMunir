$(document).ready(function() {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");

    $(".menu-Bar").click(function() {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
    });
    $(".menu li a").click(function() {
        $(".menu-Bar").removeClass("open");
        $(".menuWrap").removeClass("open");
        $("body").removeClass("ovr-hiddn");
    });
    $(".loginUp").click(function() {
        $(".LoginPopup").fadeIn();
        $(".overlay").fadeIn();
    });

    $(window).scroll(function() {
        var sticky = $('.floating-btn'),
            scroll = $(window).scrollTop();

        if (scroll >= 500) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });

    $(".signUp").click(function() {
        $(".signUpPop").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".closePop,.overlay").click(function() {
        $(".popupMain").fadeOut();
        $(".overlay").fadeOut();
    });

    $(".menu .menu-item-has-children").addClass("dropdown-nav ");
    $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");

    /* Tabbing Function */
    $("[data-targetit]").on("click", function(e) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var target = $(this).data("targetit");
        $("." + target).siblings('[class^="box-"]').hide();
        $("." + target).fadeIn();
        $(".all-slider").slick("refresh");
    });

    // Accordian
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

    $("li.dropdown-nav").hover(function() {
        $(this).children("ul").stop(true, false, true).slideToggle(300);
    });

    $(".searchBtn").click(function() {
        $(".searchWrap").addClass("active");
        $(".overlay").fadeIn("active");
        $(".searchWrap input").focus();
        $(".searchWrap input").focusout(function(e) {
            $(this).parents().removeClass("active");
            $(".overlay").fadeOut("active");
            $("body").removeClass("ovr-hiddn");
        });
    });

    $(".index-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1

    });

});



$(window).on("load", function() {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
    );
    $("ul.menu li a").each(function() {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $(this).removeClass("active");
            $(this).closest("li").addClass("active");
            $("ul.menu li.first").removeClass("active");
        }
    });
});

/* RESPONSIVE JS */
if ($(window).width() < 824) {}

function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $(".topAppendTxt").each(function() {
            var getdtd = $(this).find(".cloneDiv").clone(true);
            $(this).find(".cloneDiv").remove();
            $(this).append(getdtd);
        });
    }
}

function goToScroll(e) {
    $("html, body").animate({
        scrollTop: $("." + e).offset().top
    }, 1000);
}

$(document).ready(function() {
    $('.pkg-btn, a.combo-btn').click(function() {

        var packtitle = $(this).attr("pkg-name");
        var packprice = $(this).attr("pkg-price");;
        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $("#leadForm h6").html(packtitle);
        $("#leadForm h5").html("In Just <span>" + packprice + "</span>");
    });



    $('.popbtn2').click(function() {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');
        var packtitle = $(this).closest('.pckg2').find(".label").html();
        var packprice = $(this).closest('.pckg2').find(".price").html();
        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });

    $('.closeico,.overlay').click(function() {
        $('.popupmain').fadeOut();
        $('.overlay').fadeOut();
    });

    $('.popstatic').click(function() {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#popstatic').fadeIn();
        $('.overlay').fadeIn();
        var orgtexts = '$99';
        $(".centercont h4").html("in Just <span>" + orgtexts + "</span>");
    });

    $(window).scroll(function() {
        var header = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.addClass('sticky');
        }
        if (scroll <= 0) {
            header.removeClass('sticky');
        }

    });

});



$('.countrylist').change(function() {
    var thisval = $(this).children('option:selected').val();
    var thiscode = $(this).children('option:selected').attr('data-abbr');
    $(this).closest('.newcountrycode ').find('.countrycode').attr("value", "+" + thisval);

    if (thiscode == 'CA') {
        $(this).siblings('span').removeClass();
        $(this).siblings('span').addClass('fgca');
    } else {
        $(this).siblings('span').removeClass();
        $(this).siblings('span').addClass('fg' + thisval);
    }
});


$(".portfolio-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    centerPadding: '60px',
    speed: 300,
    slidesToShow: 6,
    prevArrow: '<a href="javascript:;" class="arrow-btn left"><i class="fa fa-arrow-left"></i></a>',
    nextArrow: '<a href="javascript:;" class="arrow-btn right"><i class="fa fa-arrow-right"></i></a>',
    responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerPadding: '60px',
            }
        }



    ]
});


$('.trusted').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '5px',
    autoplay: true,
    autoplaySpeed: 1500,

});

$('.software-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,

});
$('.content-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.testi-images',
    prevArrow: $(".arrows .prev"),
    nextArrow: $(".arrows .next"),
});
$('.testi-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.content-slider',
    dots: false,
    arrows: false,

});
$('.pckg .btn-wrap .pkg-btn').each(function() {

    var target = $(this).data("addon");
    var packtitle = $(this).closest('.pckg').find(".title").html();
    var packprice = $(this).closest('.pckg').find(".price .amount").html();


    if (target === 1) {
        $(this).attr("data-src", "#getStartedForm");
    } else {
        $(this).attr("data-src", "#leadForm");
    }

    $(this).addClass("pkg-btn");
    $(this).attr("pkg-name", packtitle);
    $(this).attr("pkg-price", packprice);
    $(this).attr("data-fancybox", "");
});

// On before slide change
$('.testi-images').on('beforeChange', function(event, {
    slideCount: count
}, currentSlide, nextSlide) {
    let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
    $('.slick-now').removeClass('slick-now');
    $(selectors).addClass('slick-now');
});

$('[data-slick-index="0"]').addClass('slick-now');





$('.design-card-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 885,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                cssEase: 'ease',
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
    ]
});
$('.design-card-list-2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    autoplaySpeed: 0,
    speed: 8000,

    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 885,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                cssEase: 'ease',
                slidesToShow: 1,
                slidesToScroll: 1,


            }
        }
    ]
});



$(".all-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    rows: 2,
    speed: 300,
    slidesToShow: 4,
    prevArrow: $(".port-content .prev"),
    nextArrow: $(".port-content .next"),
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                rows: 1,
            }
        }
    ]
});

if ($(window).width() > 1200) {
    $('.has-child.hover').hover(
        function() {
            $(this).children('.dropdown').stop(true, false, true).slideDown(500);
            $(this).find('.chev').addClass('rotate');
        },
        function() {
            $(this).children('.dropdown').stop(true, false, true).slideUp(500);
            $(this).find('.chev').removeClass('rotate');
        }
    );
} else {
    $('.has-child.hover').click(function() {
        $('.has-child').not($(this)).find('.dropdown').stop(true, false, true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
        $(this).children('.dropdown').stop(true, false, true).slideToggle(500);
        $(this).find('.chev').toggleClass('rotate');
    });
}

$('.has-child.click').click(function() {
    $('.has-child').not($(this)).find('.dropdown').stop(true, false, true).slideUp(500);
    $('.has-child').not($(this)).find('.chev').removeClass('rotate');

    $(this).find('.dropdown').stop(true, false, true).slideToggle(500);
    $(this).find('.chev').toggleClass('rotate');

});

$(document).ready(function() {
    $("picture").each(function(e) {
        var folder = $(this).attr("folder");
        var imgsrc = $(this).attr("imgsrc");
        $(this).html(`
            <source loading="lazy" src="assets/images/1x/${folder}/${imgsrc}" 
                srcset="assets/images/1x/${folder}/${imgsrc} 1x, assets/images/2x/${folder}/${imgsrc} 2x, assets/images/3x/${folder}/${imgsrc} 3x"/>
            <img loading="lazy" alt="work1" src="assets/images/1x/${folder}/${imgsrc}" 
                srcset="assets/images/1x/${folder}/${imgsrc} 1x, assets/images/2x/${folder}/${imgsrc} 2x, assets/images/3x/${folder}/${imgsrc} 3x"/>
        `);
    });
})