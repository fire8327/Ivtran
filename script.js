$('.openMenu').click(() => {
    $('#menu').toggleClass('active');

    $('.openMenu').find('.topLine').toggleClass('rt-45 translateY');
    $('.openMenu').find('.midLine').toggleClass('opacity-0');
    $('.openMenu').find('.bottomLine').toggleClass('rt45 translate-Y');

    $('body').toggleClass('overflow-hidden');
});

$('.openLink').each((o, link) => {
    $('.inner_link').each((il, ilink) => {
        $(link).click(() => {
            $('#menu').removeClass('active');
            if($(link).data('target') == $(ilink).data('title')) {
                $(ilink).toggleClass('hidden');
            }
        });
    });
});

$('.closeMenu').each((c, close) => {
    $(close).click(() => {
        $(close).closest('.inner_link').addClass('hidden');
        $('#menu').toggleClass('active');
    });
});