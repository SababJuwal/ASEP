/*********************************************************************************
 Template Name: Shoplook Multipurpose eCommerce Bootstrap5 Html Template
 Description: A perfect template to build beautiful and unique Electronics websites. It comes with nice and clean design.
 Version: 1.0
 bootstrapÄ£°å¿â£ºHttP://www.bootstrapmb.com
 **********************************************************************************/

/*************************************************
 1. Preloader Loading
 2. Promotional Bar
 3. Currency Show/Hide dropdown
 4. Language Show/Hide dropdown
 5. Top Links Show/Hide dropdown
 6. Header Search Drawer
 7. Setting Box dropdown
 8. Masonry Collection Banners
 9. Mobile Main Menu
 10. Vertical Menu
 11. Promotion / Notification Cookie Bar
 12. Slick Slider
    12.1 Homepage Slideshow
    12.2 Sidebar Product
    12.3 Category Page Slideshow
    12.4 Products Slider
    12.5 Products Slider Style2 3 Items
    12.6 Products Slider Style3
    12.7 Products Slider Fullwidth
    12.8 Product Page
    12.9 Collection Slider
    12.10 Latest Blog Slider
    12.11 Logo Slider
    12.12 Testimonial Slider
    12.13 Store Feature Slider
 13. Sidebar Categories Level links
 14. Price Range Slider
 15. Color Swacthes
 16. Footer links for mobiles
 17. SHOW HIDE PRODUCT TAG
 18. SHOW HIDE PRODUCT Filters
 19. Timer Count Down
 20. Scroll Top
 22. Product Detail Slider
    22.1 Product Detail Vertical Thumb Slider
    22.2 Product Detail Page Horizontal Thumb Slider
    22.3 Product Detail Page Center Slider
 23. Product Sticky Bottom Cart
 24. Quantity Plus Minus
 25. Visitor Fake Message
 26. Product Tabs
 27. Image to background js
 28. Sticky Product Slider
 29. Related Product Slider
 30. Infinite Scroll js
 *************************************************/

(function ($) {
    // Start of use strict
    'use strict';

    /*-----------------------------------------
     1. Preloader Loading 
     -----------------------------------------*/
    function pre_loader() {
        $("#load").fadeOut();
        $('#pre-loader').delay(0).fadeOut('slow');
    }
    pre_loader();

    function slider_refresh() {
        $(".nav-tabs .nav-item").on('click', function () {
            $('#productTabsContent .productSlider').slick('refresh');
            $('#productTabsContent .productSlider-style2').slick('refresh');
        });
    }
    slider_refresh();

    function dismiss() {
        $(".product-notification .close").on('click', function () {
            $(".product-notification").hide().fadeOut('slow');
        });
    }
    ;
    dismiss();

    /*-----------------------------------------
     2. Promotional Bar 
     -----------------------------------------*/
    function promotional_bar() {
        $(".closeHeader").on('click', function () {
            $(".promotion-header").slideUp();
            Cookies.set('promotion', 'true', {expires: 1});
            return false;
        });
    }
    promotional_bar();

    $('.slide-items').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });

    function promotional_bar_slider() {
        $('.topbar-slider-items').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }
    promotional_bar_slider();

    function store_bar_slider() {
        $('.store-slider-items').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    store_bar_slider();

    /*-----------------------------------------
     3. Currency Show/Hide dropdown
     -----------------------------------------*/
    function currency_dropdown() {
        $(".selected-currency").on("click", function () {
            $(".currencyList").slideToggle();
        });
        $(".currencyList li").on("click", function () {
            $(this).parent().slideUp();
        });
    }
    currency_dropdown();

    /*-----------------------------------------
     4. Language Show/Hide dropdown
     -----------------------------------------*/
    function language_dropdown() {
        $(".language-dd").on("click", function () {
            $(".languageList").slideToggle();
        });
        $(".languageList li").on("click", function () {
            $(this).parent().slideUp();
        });
    }
    language_dropdown();

    /*-----------------------------------------
     5. Top Links Show/Hide dropdown
     -----------------------------------------*/
    function usermenu_dropdown() {
        $(".user-menu").on("click", function () {
            $(".customer-links").slideToggle();
        });
        $(".customer-links li").on("click", function () {
            $(this).parent().slideUp();
        });
    }
    usermenu_dropdown();

    function userlink_dropdown() {
        $('.topheader .user-menu-links').on("click", function () {
            if ($(window).width() < 990) {
                $(this).next().slideToggle(300);
                $(this).parent().toggleClass("active");
            }
        });
    }
    userlink_dropdown();

    /*-----------------------------------------
     6. Header Search Drawer
     -----------------------------------------*/
    $('.site-search').on('click', function (e) {
        $('.search-drawer').toggleClass("search-drawer-open");
        setTimeout(function () {
            $('input[name="q"]').focus();
        }, 1000);
        e.preventDefault();
        var add_html = '<div class="mask-overlay">';
        $(add_html).hide().appendTo('body').fadeIn('200');
        $('.mask-overlay, .search-drawer .close').on('click', function () {
            $('.mask-overlay').remove();
            $('.search-drawer').removeClass("search-drawer-open");
        });
        $(add_html).hide().appendTo('body').fadeIn('200');
        $('.mask-overlay, .search-drawer .closeSearch').on('click', function () {
            $('.mask-overlay').remove();
            $('.search-drawer').removeClass("search-drawer-open");
        });
    });
    $('.search-drawer .closeSearch').on('click', function (e) {
        $('.search-drawer').toggleClass("search-drawer-open");
    });
    
    /*-----------------------------------------
     7. Setting Box dropdown
     -----------------------------------------*/
    function setting_box() {
        $(".setting-link").on("click", function () {
            $("#settingsBox").toggleClass("active");
        });
        $("body").on("click", function (e) {
            var t = $(e.target);
            t.parents().is("#settingsBox") || t.parents().is(".setting-link") || t.is(".setting-link") || $("#settingsBox").removeClass("active");
        });
    }
    setting_box();

    /*-----------------------------------------
     8. Masonry Collection Banners
     -----------------------------------------*/
    var $grid = $('.banner-grid, .collection-page-grid, .lookbook, .custom-text-masonry-items').masonry({
        itemSelector: '.banner-item, .collection-page-item, .grid-lookbook, .custom-text-masonry-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

    $(".btn-shop").click(function () {
        $(".products .grid-lb, .grid-lookbook").removeClass("active"),
                $(this).next().addClass("active"), $(this).parents(".grid-lookbook").addClass("active");
    });
    $(".btn-shop-close").click(function () {
        $(this).parent().removeClass("active");
    });

    /*-----------------------------------------
     9. Mobile Main Menu
     -----------------------------------------*/
    var selectors = {
        body: 'body',
        sitenav: '#siteNav',
        navLinks: '#siteNav .lvl1 > a',
        menuToggle: '.js-mobile-nav-toggle',
        mobilenav: '.mobile-nav-wrapper',
        menuLinks: '#MobileNav .an',
        closemenu: '.closemobileMenu'
    };

    $(selectors.navLinks).each(function () {
        if ($(this).attr('href') == window.location.pathname)
            $(this).addClass('active');
    });

    $(selectors.menuToggle).on("click", function () {
        body: 'body',
                $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

    $(selectors.closemenu).on("click", function () {
        body: 'body',
                $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

    $("body").on('click', function (event) {
        var $target = $(event.target);
        if (!$target.parents().is(selectors.mobilenav) && !$target.parents().is(selectors.menuToggle) && !$target.is(selectors.menuToggle)) {
            $(selectors.mobilenav).removeClass("active");
            $(selectors.body).removeClass("menuOn");
            $(selectors.menuToggle).removeClass('mobile-nav--close').addClass('mobile-nav--open');
        }
    });

    $(selectors.menuLinks).on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('an-plus an-minus');
        $(this).parent().next().slideToggle();
    });


    /*--------------------------------------
     10. Vertical Menu
     -------------------------------------- */
    $(".header-vertical-menu .menu-title").on("click", function (event) {
        $(".header-vertical-menu .vertical-menu-content").slideToggle(300);
        $(this).toggleClass('active');
    });

    // More Categories Open/Close
    $('.moreSlideOpen').slideUp();
    $('.moreCategories').on('click', function () {
        $(this).toggleClass('show');
        $('.moreSlideOpen').slideToggle();
    });

    /*--------------------------------------
     11. Promotion / Notification Cookie Bar 
     -------------------------------------- */
    function cookie_promo() {
        if ($.cookie('promotion') != 'true') {
            $(".notification-bar").show();
        }
        $(".close-announcement").on('click', function () {
            $(".notification-bar").slideUp();
            $.cookie('promotion', 'true', {expires: 1});
        });
    }
    cookie_promo();

    /*-----------------------------------------
     12. Slick Slider
     -----------------------------------------*/
    /* 12.1 Homepage Slideshow */
    function home_slider() {
        $('.home-slideshow').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 7000,
            lazyLoad: 'ondemand'
        });
    }
    home_slider();

    function home_slider_carousel() {
        $('.home-slideshow-carousel').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            fade: false,
            arrows: true,
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 999,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 7000
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 7000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 7000
                    }
                }
            ]
        });
    }
    home_slider_carousel();

    // Full Size Banner on the Any Screen
    $(window).resize(function () {
        var bodyheight = $(this).height() - 20;
        $(".sliderFull .bg-size").height(bodyheight);
    }).resize();

    /* 12.2 Sidebar Product */
    function side_product_slider() {
        $('.sideProSlider').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2500
        });
    }
    side_product_slider();

    /* 12.3 Category Page Slideshow */
    function category_slider() {
        $('.category-banner-slider').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        });
    }
    category_slider();

    function category_slider1() {
        $('.category-style1').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
    category_slider1();

    function category_slider2() {
        $('.box-content-category-style2').slick({
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
    category_slider2();

    function category_slider3() {
        $('.box-content-category-style3').slick({
            dots: false,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
    category_slider3();

    /* 12.4 Products Slider */
    function product_slider() {
        $('.productSlider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]

        });
    }
    product_slider();

    /* 12.5 Products Slider Style2 3 Items */
    function product_slider1() {
        $('.productSlider-style1').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_slider1();

    /* 12.6 Products Slider Style3 */
    function product_slider2() {
        $('.productSlider-style2').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_slider2();

    /* 12.7 Products Slider Fullwidth */
    function product_slider_full() {
        $('.productSlider-fullwidth').slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_slider_full();

    /* 12.8 Product Page */
    function product_slider_ppage() {
        $('.productPageSlider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_slider_ppage();

    /* 12.9 Collection Slider */
    function collection_slider() {
        $('.collection-grid-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    collection_slider();

    function collection_slider_4items() {
        $('.collection-slider-4items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    collection_slider_4items();

    function collection_slider1() {
        $('.collection-grid-4item').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    collection_slider1();


    /* 12.10 Latest Blog Slider */
    function blogpost_slider() {
        $('.blog-post-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
    blogpost_slider();

    function blogpost_slider_style1() {
        $('.blog-post-slider-style1').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    blogpost_slider_style1();


    /* 12.11 Logo Slider */
    function logo_slider() {
        $('.logo-bar').slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                }
            ]
        });
    }
    logo_slider();


    /* 12.12 Testimonial Slider */
    function testimonial_slider() {
        $('.quotes-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    testimonial_slider();

    function testimonial_slider_style2() {
        $('.quotes-slider-style2').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 9000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    testimonial_slider_style2();

    function testimonial_slider_style3() {
        $('.quotes-slider-style3').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 9000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    testimonial_slider_style3();

    /* 12.13 Store Feature Slider */
    function storefeature_slider() {
        $('.store-info').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                }
            ]
        });
    }
    storefeature_slider();

    function storefeature_slider_style2() {
        $('.store-info-style2').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                },
                {
                    breakpoint: 766,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000
                    }
                }
            ]
        });
    }
    storefeature_slider_style2();

    /*-----------------------------------
     13. Sidebar Categories Level links
     -------------------------------------*/
    function categories_level() {
        $(".sidebar_categories .sub-level a").on("click", function () {
            $(this).toggleClass('active');
            $(this).next(".sublinks").slideToggle("slow");
        });
    }
    categories_level();

    $(".filter-widget .widget-title").on("click", function () {
        $(this).next().slideToggle('300');
        $(this).toggleClass("active");
    });

    /*-----------------------------------
     14. Price Range Slider
     -------------------------------------*/
    function price_slider() {
        $("#slider-range").slider({
            range: true,
            min: 12,
            max: 200,
            values: [0, 100],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
    }
    price_slider();

    /*-----------------------------------
     15. Color Swacthes
     -------------------------------------*/
    function color_swacthes() {
        $.each($(".swacth-list"), function () {
            var n = $(".swacth-btn");
            n.on("click", function () {
                $(this).parent().find(n).removeClass("checked");
                $(this).addClass("checked");
            });
        });
    }
    color_swacthes();

    /*-----------------------------------
     16. Footer links for mobiles
     -------------------------------------*/
    function footer_dropdown() {
        $(".footer-links .h4").on('click', function () {
            if ($(window).width() < 766) {
                $(this).next().slideToggle();
                $(this).toggleClass("active");
            }
        });
    }
    footer_dropdown();

    // Blog Pages Sidebar Widget +/-
    function sidebar_dropdown() {
        $(".sidebar_tags .sidebar_widget .widget-title").on('click', function () {
            if ($(window).width() < 766) {
                $(this).next().slideToggle();
                $(this).toggleClass("active");
            }
        });
    }
    sidebar_dropdown();

    //Resize Function 
    var resizeTimer;
    $(window).resize(function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $(window).trigger('delayed-resize', e);
        }, 250);
    });
    $(window).on("load resize", function (e) {
        if ($(window).width() > 766) {
            $(".footer-links ul").show();
            $(".blog-sidebar-page .sidebar_tags .sidebar_widget .widget-content").show();
        }
        else {
            $(".footer-links ul").hide();
            $(".blog-sidebar-page .sidebar_tags .sidebar_widget .widget-content").hide();
        }
    });

    /*-------------------------------
     17. SHOW HIDE PRODUCT TAG
     ----------------------------------*/
    $(".product-tags li").eq(10).nextAll().hide();
    $('.btnview').on('click', function () {
        $(".product-tags li").not('.filter--active').show();
        $(this).hide();
    });

    /*-------------------------------
     18. SHOW HIDE PRODUCT Filters
     ----------------------------------*/
    $('.btn-filter').on("click", function () {
        $(".filterbar").toggleClass("active");
    });
    $('.closeFilter').on("click", function () {
        $(".filterbar").removeClass("active");
    });
    // Hide Cart on document click
    $("body").on('click', function (event) {
        var $target = $(event.target);
        if (!$target.parents().is(".filterbar") && !$target.is(".btn-filter")) {
            $(".filterbar").removeClass("active");
        }
    });

    /*-------------------------------
     19. Timer Count Down
     ----------------------------------*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
                finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="ht-count days"><span class="count-inner"><span class="time-count">%-D</span> <span>Days</span></span></span> <span class="ht-count hour"><span class="count-inner"><span class="time-count">%-H</span> <span>HR</span></span></span> <span class="ht-count minutes"><span class="count-inner"><span class="time-count">%M</span> <span>Min</span></span></span> <span class="ht-count second"><span class="count-inner"><span class="time-count">%S</span> <span>Sc</span></span></span>'));
        });
    });

    /*-------------------------------
     20.Scroll Top
     ---------------------------------*/
    function scroll_top() {
        $("#site-scroll").on("click", function () {
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });
    }
    scroll_top();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#site-scroll").fadeIn();
        } else {
            $("#site-scroll").fadeOut();
        }
    });

    /*--------------------------
     21. Product Zoom
     ---------------------------- */
    function product_zoom() {
        $(".zoompro").elevateZoom({
            gallery: "gallery",
            galleryActiveClass: "active",
            zoomWindowWidth: 300,
            zoomWindowHeight: 100,
            scrollZoom: false,
            zoomType: "inner",
            cursor: "crosshair"
        });
    }
    product_zoom();

    /*----------------------------
     22. Product Detail Slider
     ------------------------------ */
    /* 22.1 Product Detail Vertical Thumb Slider */
    function product_thumb() {
        $('.product-dec-slider-2').slick({
            infinite: true,
            slidesToShow: 6,
            vertical: true,
            verticalSwiping: true,
            centerPadding: '0',
            draggable: true,
            slidesToScroll: 1
        });
    }
    product_thumb();

    /* 22.2 Product Detail Page Horizontal Thumb Slider */
    function product_thumb1() {
        $('.product-thumb-style1').slick({
            infinite: true,
            slidesToShow: 6,
            stageMargin: 5,
            slidesToScroll: 1
        });
    }
    product_thumb1();

    /* 22.3 Product Detail Page Center Slider */
    function product_center_mode() {
        $('.product-center-style3').slick({
            centerMode: true,
            infinite: true,
            centerPadding: '0',
            slidesToShow: 3,
            speed: 500,
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_center_mode();


    /*----------------------------
     23. Product Sticky Bottom Cart
     ------------------------------ */
    function shopLook_sticky_cart() {
        window.onscroll = function () {
            // Header Sticky
            if ($(window).width() > 1024) {
                if ($(window).scrollTop() > 145) {
                    $('.header .main-menu, .header-transparent, .header-sticky').addClass("stickyNav animated fadeIn");
                } else {
                    $('.header .main-menu, .header-transparent, .header-sticky').removeClass("stickyNav fadeIn");
                }
            }
            // End Header Sticky

            $(window).scrollTop() > 600 && $(".stickyCart").length ? (
                    $("body.template-product").css("padding-bottom", "70px"),
                    $(".stickyCart").slideDown()) : ($("body.template-product").css("padding-bottom", "0"),
                    $(".stickyCart").slideUp());
        };
        $(".stickyOptions .selectedOpt").on("click", function () {
            $(".stickyOptions ul").slideToggle("fast");
        }),
                $(".stickyOptions .vrOpt").on("click", function (e) {
            var t = $(this).attr("data-val"),
                    s = $(this).attr("data-no"),
                    a = $(this).text();
            $(".selectedOpt").text(a), $(".stickyCart .selectbox").val(t).trigger("change"), $(".stickyOptions ul").slideUp("fast"), this.productvariants = JSON.parse(document.getElementById("ProductJson-" + i).innerHTML), $(".stickyCart .product-featured-img").attr("src", this.productvariants.variants[s].featured_image.src.replace(/(\.[^\.]*$|$)/, "_60x60$&"));
        });
    }
    shopLook_sticky_cart();

    /*----------------------------------
     24. Quantity Plus Minus
     ------------------------------------*/
    function qnt_incre() {
        $(".qtyBtn").on("click", function () {
            var qtyField = $(this).parent(".qtyField"),
                    oldValue = $(qtyField).find(".qty").val(),
                    newVal = 1;

            if ($(this).is(".plus")) {
                newVal = parseInt(oldValue) + 1;
            } else if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            }
            $(qtyField).find(".qty").val(newVal);
        });
    }
    qnt_incre();

    /*----------------------------------
     25. Visitor Fake Message
     ------------------------------------*/
    var userLimit = $(".userViewMsg").attr('data-user'),
            userTime = $(".userViewMsg").attr('data-time');
    $(".uersView").text(Math.floor((Math.random() * userLimit)));
    setInterval(function () {
        $(".uersView").text(Math.floor((Math.random() * userLimit)));
    }, userTime);

    /*----------------------------------
     26. Product Tabs
     ------------------------------------*/
    $(".tab-content").hide();
    $(".tab-content:first").show();
    /* if in tab mode */
    $(".product-tabs li").on('click', function () {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".product-tabs li").removeClass("active");
        $(this).addClass("active");
    });

    $('.product-tabs li:first-child').addClass("active");
    $('.tab-container h3:first-child + .tab-content').show();

    /* if in drawer mode */
    $(".acor-ttl").on("click", function () {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".acor-ttl").removeClass("active");
        $(this).addClass("active");
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({scrollTop: tabposition.top}, 700);
        }
    });

    /* Below 767 Accordian style */
    $(".tabs-ac-style").on("click", function () {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".tabs-ac-style").removeClass("active");
        $(this).addClass("active");

        $(this).fadeIn();
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({scrollTop: tabposition.top}, 700);
        }
    });

    /* --------------------------------------
     27. Image to background js
     -------------------------------------- */
    $(".bg-top").parent().addClass('b-top');
    $(".bg-bottom").parent().addClass('b-bottom');
    $(".bg-center").parent().addClass('b-center');
    $(".bg-left").parent().addClass('b-left');
    $(".bg-right").parent().addClass('b-right');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up").parent().addClass('');
    jQuery('.bg-img').each(function () {
        var el = $(this),
                src = el.attr('src'),
                parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat'
        });
        el.hide();
    });
    /* --------------------------------------
     End Image to background js
     -------------------------------------- */

    /*----------------------------------
     28. Sticky Product Slider
     ------------------------------------*/
    function sticky_pro_slider() {
        $('.product-single-style2 .product-details-img').slick({
            dots: false,
            infinite: false,
            item: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
        });
        $(window).width() > 767 ? $(".product-single-style2 .product-details-img").slick("unslick") : $(".product-single-style2 .product-details-img").slick("refresh");
    }
    sticky_pro_slider();

    function sticky_pro_slider_style4() {
        $('.product-single-style4 .product-details-img .row').slick({
            dots: false,
            infinite: false,
            item: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }]
        });
        $(window).width() > 767 ? $(".product-single-style4 .product-details-img .row").slick("unslick") : $(".product-single-style4 .product-details-img .row").slick("refresh");
    }
    sticky_pro_slider_style4();

    /*----------------------------------
     29. Related Product Slider
     ------------------------------------*/
    function related_slider() {
        $('.related-product .productSlider').slick({
            dots: false,
            infinite: true,
            item: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    related_slider();
    /*----------------------------------
     End Related Product Slider
     ------------------------------------*/

    /*-----------------------------------
     30. Infinite Scroll js
     -------------------------------------*/
    function load_more() {
        $(".product-load-more .item").slice(0, 12).show();
        $(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(".product-load-more .item:hidden").slice(0, 4).slideDown();
            if ($(".product-load-more .item:hidden").length == 0) {
                $(".infinitpagin").html('<div class="btn btn-large loadMore">no more products</div>');
            }
        });
    }
    load_more();

    function load_more_listview() {
        $(".product-load-more .list-product").slice(0, 7).show();
        $(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(".product-load-more .list-product:hidden").slice(0, 5).slideDown();
            if ($(".product-load-more .list-product:hidden").length == 0) {
                $(".infinitpagin").html('<div class="btn btn-large loadMore">no more products</div>');
            }
        });
    }
    load_more_listview();

    function load_more_post() {
        $(".blog--grid-load-more .article").slice(0, 6).show();
        $(".loadMorepost").on('click', function (e) {
            e.preventDefault();
            $(".blog--grid-load-more .article:hidden").slice(0, 3).slideDown();
            if ($(".blog--grid-load-more .article:hidden").length == 0) {
                $(".loadmore-post").html('<div class="btn btn-large loadMorepost">No more Blog Post...</div>');
            }
        });
    }
    load_more_post();
    /*-----------------------------------
     End Infinite Scroll js
     -------------------------------------*/

})(jQuery);

