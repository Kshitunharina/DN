// MAIN PAGE CAROUSEL [FIRST SECTION]
$(document).ready(function () {
  $("#first_section .owl-carousel").owlCarousel({
    items: 5, // This Is The Number of Items You Want To show
    margin: 0, // This Is The Gap Which You Want To Shows
    loop: true, // Behaves As A Loop As The Default is False We Need To Change
    nav: true, // It Will Show THe arrows
    autoplay: true, // Playing The Carousel Automatically
    autoplayTimeout: 7000, // At What Time You Need The Carousel To scroll Automatically

    // This Is For The Animation Only Occurs For Single Data
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    // rtl: true, // It Will Make The Carousel Slide from Right To left In reverse Order

    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      1000: {
        items: 1,
        nav: false,
        dots: false,
        // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
      },
    },
  });
});

// MAIN PAGE CAROUSEL [THIRD SECTION]
$(document).ready(function () {
  $("#third_section .owl-carousel").owlCarousel({
    items: 5, // This Is The Number of Items You Want To show
    margin: 20, // This Is The Gap Which You Want To Shows
    loop: true, // Behaves As A Loop As The Default is False We Need To Change
    nav: true, // It Will Show THe arrows
    autoplay: true, // Playing The Carousel Automatically
    autoplayTimeout: 8000, // At What Time You Need The Carousel To scroll Automatically

    // This Is For The Animation Only Occurs For Single Data
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    // rtl: true, // It Will Make The Carousel Slide from Right To left In reverse Order

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      900: {
        items: 2,
        nav: false,
      },
      1200: {
        items: 3,
        nav: false,
        // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
      },
    },
  });
});

// MAIN PAGE CAROUSEL [SEVENTH SECTION]
$(document).ready(function () {
  $("#seventh_section .owl-carousel").owlCarousel({
    items: 5, // This Is The Number of Items You Want To show
    margin: 20, // This Is The Gap Which You Want To Shows
    loop: true, // Behaves As A Loop As The Default is False We Need To Change
    nav: true, // It Will Show THe arrows
    autoplay: true, // Playing The Carousel Automatically
    autoplayTimeout: 10000, // At What Time You Need The Carousel To scroll Automatically

    // This Is For The Animation Only Occurs For Single Data
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    // rtl: true, // It Will Make The Carousel Slide from Right To left In reverse Order

    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      900: {
        items: 2,
        nav: false,
      },
      1200: {
        items: 3,
        nav: false,
        // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
      },
    },
  });
});
