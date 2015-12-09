/**
 * Created by abdulsamad on 12/10/15.
 */

    jQuery(document).ready(function($) {
        $(window).load(function(){
            $('#preload_wrapper').fadeOut('slow',function(){$(this).remove();});
        });

    });



    var didScroll;
    var lastScrollTop = 0;
    var delta = 2;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();


        if(Math.abs(lastScrollTop - st) <= delta)
            return;


        if (st > lastScrollTop && st > navbarHeight){

            $('header').removeClass('nav-down').addClass('nav-up');
        } else {

            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }


    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() == 0) {
            $('header').addClass('reachedTop');

        } else {
            $('header').removeClass('reachedTop');
        }
    });



    jQuery(document).ready(function($) {

        $("#guy").hover(
            function () {
                $('#hi').addClass('animated jello');
            },
            function () {
                $('#hi').removeClass('animated jello');
            }
        );



        $(".logo").hover(
            function () {
                $('.logo span').addClass('animated bounce');
            },
            function () {
                $('.logo span').removeClass('animated bounce');
            }
        );





    });

