// Smooth scrolling for links
$('a.js-scroll-trigger').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 50
        },
        800 // Adjust the speed of scrolling here (in milliseconds)
      );
    }
  });

  // Highlight active link on scroll
  $(window).on('scroll', function () {
    const scrollDistance = $(window).scrollTop();

    $('section').each(function (i) {
      if ($(this).position().top <= scrollDistance + 100) {
        $('ul.navbar-nav li.nav-item.active').removeClass('active');
        $('ul.navbar-nav li.nav-item:eq(' + i + ')').addClass('active');
      }
    });
  });

  // Mobile navbar collapse
  $(document).ready(function () {
    $('.navbar-toggler').click(function () {
      $('#navbarResponsive').toggleClass('show');
    });
  });