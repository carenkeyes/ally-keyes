function handleScrollDown(){
    $('.js-scroll-down').click(function(){
        console.log('arrow clicked');
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 1500);
    })
}

handleScrollDown();