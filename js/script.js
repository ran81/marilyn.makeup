(function ($) {

  "use strict";

  // Scroll Top 
  var initScrollTop = function () {
    $('#scrollToTopBtn').each(function () {
      var scrollToTopBtn = document.getElementById("scrollToTopBtn");
      var rootElement = document.documentElement;

      jQuery(window).scroll(function () {

        if ($(window).scrollTop() > 2000)
          $('#scrollToTopBtn').addClass('active');
        else
          $('#scrollToTopBtn').removeClass('active');

      });

      function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);
    });
  }

  // Tab Section
  var initTabs = function () {
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });
  }

  // Responsive Navigation with Button
  var initHamburgerMenu = function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu-list");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("responsive");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("responsive");
    }
  };

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // init Slick Sliders
  var initSliders = function () {

    $('.main-slider').slick({
      autoplay: false,
      autoplaySpeed: 4000,
      fade: true,
      dots: true,
      arrows: false,
    });

    $('.testimonial-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });

  }

  // document ready
  $(document).ready(function () {
    initScrollTop();
    initTabs();
    initHamburgerMenu();
    initSliders();
    initChocolat();
  });

  AOS.init({
    duration: 1200,
    once: true,
  })

  // window load
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
  })

})(jQuery);
