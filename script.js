$(document).ready(function () {
    // Scroll Progress Bar functionality
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop(); // How much user has scrolled
        var documentHeight = $(document).height(); // Total document height
        var windowHeight = $(window).height(); // Window height
        var scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100; // Calculate scroll percentage

        // Set the width of the progress bar based on scroll percentage
        $('#progress-bar').css('width', scrollPercentage + '%');
    });
});








$(document).ready(function () {
    // Smooth Scrolling Effect for the Button
    $('#header-btn').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#home').height()
        }, 1000);
    });
});






$(document).ready(function () {
    // Fade-in Animation on Scroll
    $(window).on('scroll', function () {
        $('mb-5, .animated-text, .animated-img, .animated-card').each(function () {
            var elemPos = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollPos + windowHeight - 300 > elemPos) {
                $(this).addClass('fade-in');
            }
        });
    });
});







$(document).ready(function () {
    // Animate Footer Content on Scroll
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var footerPos = $('#contact').offset().top - $(window).height();
        
        if (scrollPos > footerPos) {
            $('.footer-heading, .footer-text, .footer-link, .social-links').addClass('show');
        }
    });

    // Smooth Scroll for Links
    $('.footer-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
});







$(document).ready(function() {
  // Add animation when page loads
  $('#footer-logo').hide().fadeIn(1000);

  // Add bounce animation on hover
  $('#footer-logo').hover(
    function() {
      $(this).addClass('animate__animated animate__bounce');
    },
    function() {
      $(this).removeClass('animate__animated animate__bounce');
    }
  );
});







$(document).ready(function () {
    // Back-to-Top Button Show/Hide on Scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Smooth Scrolling for Back-to-Top Button
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // Triggering animations as the user scrolls
    $(window).on('scroll', function () {
        $('.fade-in').each(function () {
            var elemPos = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollPos + windowHeight - 300 > elemPos) {
                $(this).addClass('show');
            }
        });
    });
});
