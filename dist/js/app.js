$(document).ready(function() {
    // toggle hamburger menu
    $('.ptz_MobileToggle').on('click', function() {
        $(this).toggleClass('active');
        $('.ptz_HeaderNavigationWrap').toggleClass('active');
        $('body').toggleClass('openMenu');
    })
    $('.ptz_HeaderOverlay').on('click', function() {
        $(this).removeClass('active');
        $('.ptz_HeaderNavigationWrap').removeClass('active');
        $('body').removeClass('openMenu');
    })
    $('.ptz_HeaderCloseMenu').on('click', function() {
        $(this).removeClass('active');
        $('.ptz_HeaderNavigationWrap').removeClass('active');
        $('body').removeClass('openMenu');
    })
    // sticky on scroll
    $(window).scroll(function() {
    if ($(this).scrollTop() > 350){  
            $('header.ptz_Header').addClass("sticky");
            $('body').addClass('sticky')
        }
        else {
            $('header.ptz_Header').removeClass("sticky");
            $('body').removeClass('sticky')
        }
    });
    //brand logo carousel
    $("#ptz_BrandlogoList").owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 4,
                margin: 20,
            },
            768: {
                items: 5
            },
            991: {
                items: 6
            }
        }
    });
})