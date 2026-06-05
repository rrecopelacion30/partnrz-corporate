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
})