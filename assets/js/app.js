new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 20,
  

    //Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },


        668: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
  });

//   
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.para', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.kk,.btn-home,.second-input', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.card,p,.all-btn', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.first-input,label,.form-select,textarea,.home-pageimg', { delay: 0, origin: 'left', interval: 200 });
ScrollReveal().reveal('.footer,.h1', { delay: 200, origin: 'bottom', });