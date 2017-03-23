// Contact Form Functionality
(function($) {
    $('#contact').submit(function(evt) {
        evt.preventDefault();
        $('.modal-body').show();
        $('#spinner').hide();
        $('.message-failure').hide();
        $('.message-success').hide();
        var $form = $(this);
        var incomingData = $form.serializeObject();
        var data = JSON.stringify(incomingData);
        $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            crossDomain: true,
            data: data,
            contentType: 'application/json',
            dataType: 'json',
            beforeSend: function () {
                $('.modal-body').hide();
                $('#contact').hide();
                $('#spinner').show();
            },
            success: function () {
                $('#spinner').hide();
                $('.modal-body').show();
                $('#contact').hide();
                $('.message-success').show();
            },
            error: function () {
                $('#spinner').hide();
                $('.modal-body').show();
                $('#contact').hide();
                $('.message-failure').show();
            }
        });
    });
    $('a[href="#contact-us"]').on('click', function() {
        $('.modal-body').show();
        $('#spinner').hide();
        $('.message-failure').hide();
        $('.message-success').hide();
    });
})(jQuery);
