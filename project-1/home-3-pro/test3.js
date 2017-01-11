/* <![CDATA[ */ ;
$('div#categories_block_left ul.dhtml').hide();;
var CUSTOMMENU_POPUP_EFFECT = 0;
var CUSTOMMENU_POPUP_TOP_OFFSET = 65;;
$(document).ready(function() {
    var owl = $(".pos-topsellers");
    owl.owlCarousel({
        items: 1,
        navigation: false,
        slideSpeed: 1000,
        pagination: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [767, 1],
        itemsMobile: [480, 1]
    });
});;
$(document).ready(function() {
    var owl = $("#product_category");
    owl.owlCarousel({
        items: 3,
        pagination: false,
        lazyLoad: true,
        slideSpeed: 1000,
        navigation: true,
        addClassActive: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [911, 2],
        itemsTablet: [767, 2],
        itemsMobile: [479, 1],
    });
});;
$(document).ready(function() {
    var owl = $(".logo-slider");
    owl.owlCarousel({
        items: 6,
        addClassActive: true,
        navigation: true,
        slideSpeed: 1000,
        pagination: false,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [911, 4],
        itemsTablet: [767, 3],
        itemsMobile: [360, 2]
    });
});;
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < 180) {
            $(".header-bottom").removeClass("scroll-menu");
        } else {
            $(".header-bottom").addClass("scroll-menu");
        }
    });
}); /* ]]> */
