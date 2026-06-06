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
    //scroll top
    $('.ptz_ScrollTopWrapper').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
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
    //faq accordion
    var $container = $('.ptz_FaqWrapper');
    // Reset all (safety)
    $container.find('.ptz_FaqCardItem')
        .removeClass('active')
        .find('.ptz_FaqContent')
        .hide();
    // Open first item
    var $firstItem = $container.find('.ptz_FaqCardItem').first();
    $firstItem.addClass('active')
        .find('.ptz_FaqContent')
        .show();
    // Accordion click behavior
    $container.on('click', '.ptz_FaqCardItem .ptz_FaqHeader', function () {
        var $wrapper = $(this).closest('.ptz_FaqCardItem');
        var $content = $wrapper.find('.ptz_FaqContent');
        var $siblings = $wrapper.siblings('.ptz_FaqCardItem');

        // Toggle clicked item
        $wrapper.toggleClass('active');
        $content.stop(true, true).slideToggle(250);

        // Close others
        $siblings.removeClass('active')
            .find('.ptz_FaqContent')
            .stop(true, true)
            .slideUp(250);
    });
})