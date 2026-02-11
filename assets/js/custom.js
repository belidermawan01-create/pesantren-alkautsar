(function ($) {

  "use strict";

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


  $('.owl-banner').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1600: {
        items: 1
      }
    }
  })

  $('.owl-services').owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    margin: 5,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1600: {
        items: 4
      }
    }
  })

  $('.owl-portfolio').owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      },
      1600: {
        items: 4
      }
    }
  })



  // Menu Dropdown Toggle
  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);
        }
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {

    $('.scroll-to-section a').on('click', function (e) {
      const href = $(this).attr('href');

      if (!href) return;

      // ====== KASUS ANCHOR (#section) ======
      if (href.startsWith('#')) {
        const target = $(href);

        if (target.length) {
          e.preventDefault();
          $(document).off("scroll");

          $('.scroll-to-section a').removeClass('active');
          $(this).addClass('active');

          $('html, body').stop().animate({
            scrollTop: target.offset().top + 1
          }, 500, 'swing', function () {
            window.location.hash = href;
            $(document).on("scroll", onScroll);
          });
        }
        return;
      }

      // ====== KASUS FILE HTML ======
      if (href.startsWith('./') || href.endsWith('.html')) {
        // BIAR NAVIGASI NORMAL
        window.location.href = href;
        return;
      }
    });

  });


  (function ($) {
    "use strict";

    $(document).ready(function () {

      /* =========================
         MENU ACTIVE (AMAN)
         ========================= */
      $('.scroll-to-section a').on('click', function () {
        $('.scroll-to-section a').removeClass('active');
        $(this).addClass('active');
        // ❌ TIDAK ADA preventDefault
        // ❌ TIDAK ADA offset()
        // ❌ TIDAK ADA animate()
      });

      /* =========================
         OPTIONAL: STICKY HEADER
         ========================= */
      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
          $('.header-area').addClass('background-header');
        } else {
          $('.header-area').removeClass('background-header');
        }
      });

    });

  })(window.jQuery);




  // Page loading animation
  $(window).on('load', function () {

    $('#js-preloader').addClass('loaded');

  });



  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function () {
      if (width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);