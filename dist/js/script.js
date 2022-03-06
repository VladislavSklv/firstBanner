$(document).ready(function(){
    let bannerList = document.querySelectorAll('.li');

    if (window.innerWidth <= 768){
        setTimeout( () => {
            $('.banner-black__logo').addClass('banner-black__logo_active');
            $('.banner-green__logo').addClass('banner-green__logo_active');
        }, 1000);
        setTimeout( () => {
            $('.banner-black__logo').removeClass('banner-black__logo_active');
            $('.banner-green__logo').removeClass('banner-green__logo_active');
        }, 2500);
        setTimeout(() => {
            $('.banner-black__logo').css('display', 'none');
            $('.banner-green__logo').css('display', 'none');
        }, 3500);
        setTimeout( () => {
            $('.banner-black__text').fadeIn('slow');
        }, 4000);
        setTimeout( () => {
            $('.banner-green__text').fadeIn('slow');
        }, 5500);
        setTimeout( () => {
            $('.banner-black__text').fadeOut('slow');
            $('.banner-green__text').fadeOut('slow');
        }, 7000);
        setTimeout( () => {
            $('.banner-black__list').css('display', 'flex');
            $('.banner-green__list').css('display', 'flex');
        }, 7490);
        setTimeout(() => {
            bannerList.forEach(function(item, i){
                setTimeout(() => {
                    item.classList.add('li_active');
                }, (i + 1) * 1000);
            });
        }, 7500);
        setTimeout(() => {
            bannerList.forEach(function(item, i){
                setTimeout(() => {
                    item.classList.remove('li_active');
                }, (i + 1) * 1000);
            });
        }, 15500);
        setTimeout( () => {
            $('.banner-black__list').css('display', 'none');
            $('.banner-green__list').css('display', 'none');
            $('.banner-black__logo').css('display', 'block');
            $('.banner-green__logo').css('display', 'block');
        }, 22000);
        setTimeout( () => {
            $('.banner-black__logo').addClass('banner-black__logo_active');
            $('.banner-green__logo').addClass('banner-green__logo_active');
        }, 23000);
    } else {
        setTimeout( () => {
            $('.banner-black__logo').addClass('banner-black__logo_active');
            $('.banner-green__logo').addClass('banner-green__logo_active');
        }, 1000);
        setTimeout( () => {
            $('.banner-black__text').fadeIn('slow');
        }, 2500);
        setTimeout( () => {
            $('.banner-green__text').fadeIn('slow');
        }, 4000);
        setTimeout( () => {
            $('.banner-black__text').fadeOut('slow');
            $('.banner-green__text').fadeOut('slow');
        }, 5500);
        setTimeout( () => {
            $('.banner-black__list').fadeIn();
            $('.banner-green__list').fadeIn();
        }, 6400);
        setTimeout(() => {
            bannerList.forEach(function(item, i){
                setTimeout(() => {
                    item.classList.add('li_active');
                }, (i + 1) * 1000);
            });
        }, 6500);
    }
});