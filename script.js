$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// ACCORDIAN


$(document).ready(function(){
    $(".accordion-titel").click(function(){
    $(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
    $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
    $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
    });
});
  
