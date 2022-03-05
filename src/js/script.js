$(document).ready(function(){
    let bannerList = document.querySelectorAll('.li');
    console.log('sadasdsd');

    setTimeout( () => {
        $('.banner-black__logo').addClass('banner-black__logo_active');
        $('.banner-green__logo').addClass('banner-green__logo_active');
    }, 2000);
    setTimeout( () => {
        $('.banner-black__text').fadeIn('slow');
    }, 3500);
    setTimeout( () => {
        $('.banner-green__text').fadeIn('slow');
    }, 5000);
    setTimeout( () => {
        $('.banner-black__text').fadeOut('slow');
        $('.banner-green__text').fadeOut('slow');
    }, 6500);
    setTimeout( () => {
        $('.banner-black__list').fadeIn();
        $('.banner-green__list').fadeIn();
    }, 7500);
    setTimeout(() => {
        bannerList.forEach(function(item, i){
            setTimeout(() => {
                item.classList.add('li_active');
            }, (i + 1) * 1000);
        });
    }, 8000);
});