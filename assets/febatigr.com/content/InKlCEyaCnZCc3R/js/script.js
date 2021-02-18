var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var visibleafterrotate = document.getElementById('visibleafterrotate');

function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = "block";
      visibleafterrotate.classList.remove('visibility_hidden');
    }, 8000);

    wheel.classList.add('rotated');
  }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
});

// --------------SCROLL-------------------
$("a").on("touchend, click", function (e) {
  e.preventDefault();
  $('body,html').animate({ scrollTop: $('#order_form').offset().top - 50 }, 400);
});