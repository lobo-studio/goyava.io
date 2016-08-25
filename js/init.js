$(function () {
    // Transition a href
    $('.gayava-menu a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('.sign_in').click(function(e){
        e.preventDefault();
        $('#myModal').modal()
        $('#page').addClass('add-blur')
    });
    $('.close').click(function () {
        $('#page').removeClass('add-blur')
    })

    $('#contactSend').on('click', function () {
        var data = {
            email: $('#contactEmail').val(),
            message: $('#contactMessage').val()
        };

        $.post('http://goyava.site/contacts', data)
            .then(function () {
                alert('Your message sent');
            });
    });
});

