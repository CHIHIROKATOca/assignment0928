$('.slick').slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }]
  });