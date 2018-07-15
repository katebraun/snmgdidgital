
$(document).ready(function () {
  var elementToFlip1 = $('.concept__letters-img'),
      elementTop1 = elementToFlip1.offset().top,
      elementToFlip2 = $('.concept__games-img'),
      elementTop2 = elementToFlip1.offset().top,
      elementToFlip3 = $('.concept__contest-img'),
      elementTop3 = elementToFlip1.offset().top;

  $(window).scroll(function () {
      var screenTop = $(document).scrollTop();

      if (screenTop >= (elementTop1 - 500)) {
          elementToFlip1.removeClass('stop');
      } else if (screenTop < (elementTop1 - 1500)) {
          elementToFlip1.addClass('stop');
      }

      setTimeout(function () {
          if (screenTop >= (elementTop2 - 500)) {
              elementToFlip2.removeClass('stop');
          } else if (screenTop < (elementTop2 - 1500)) {
              elementToFlip2.addClass('stop');
          }
      }, 200);

      setTimeout(function () {
          if (screenTop >= (elementTop3 - 500)) {
              elementToFlip3.removeClass('stop');
          } else if (screenTop < (elementTop3 - 1500)) {
              elementToFlip3.addClass('stop');
          }
      }, 400);
  });
});
