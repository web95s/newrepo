
(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // form validation of index.html

    $(document).ready(function () {
        $(".btn1").on("click", function () {
            var name = document.myform.name.value;
            let x = name.toUpperCase();
            var email = document.myform.email.value;
            // let userexp = /^[A-Za-z_.0-9]{6,30}@[A-Za-z]{4,12}.[A-Za-z.]{2,8}$/;
            let useremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var tel = document.myform.tel.value;
            let telphone = /^\d{10}$/;
            console.log("test email tel", typeof (telphone));
            let valid = false;
            if (name == null || name == "") {
                swal("Name can't be blank 111");
                return false;
            } else if (!useremail.test(email)) {
                console.log("test email", useremail);
                swal("Email valid Email");
                return false;
            }
            else if (tel == null || tel == "") {
                swal("Phone can't be blank");
                return false;
            } else if (!telphone.test(tel)) {
                swal("Enter correct Phone number format");
                return false;
            } else {
                // let text = `Thank you for your interest ${x} We will get you back soon`
                // let x =
                if (swal("Form Submitted.", `Thank you for your interest Dear ${x} ! We will get you back soon.`, "success") == true) {
                    name = '';
                    return false;
                } else {
                    return false;

                }
            }
        })
    })



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

