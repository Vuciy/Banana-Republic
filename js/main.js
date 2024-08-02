let screenSize = window.screen.availWidth;
let screenType = screenSize < 760 ? MOBILE : DESKTOP;
let rotate = screenType === MOBILE ? 270 : 0;
let contentShowed = true;
let width = $("#form-screen").width();
$(document).ready(function () {
  showContent();
  getScreen();
  $("#arrow").animateRotate(rotate, 500);
});

$(window).on("resize", function () {
  screenSize = window.screen.availWidth;
  screenType = screenSize < 760 ? MOBILE : DESKTOP;
  rotate = screenType === MOBILE ? 270 : 0;
  $("#arrow").animateRotate(rotate, 500);
});

const formSubmit = (e) => {
  e.preventdefault();
};

const showContent = () => {
  contentShowed = true;
  $("#form-screen").show();
  $("#info-screen").hide();
  $("#form-screen").animate(
    {
      width: "100%",
    },
    function () {}
  );

  if (screenType === MOBILE) {
    rotate = 270;
    jumpToReleventDiv("form-screen");
  } else {
    rotate = 0;
  }
};

const showInfo = () => {
  contentShowed = false;
  $("#form-screen").animate(
    {
      width: 0,
    },
    function () {
      $(this).hide();
      $("#info-screen").show();
    }
  );

  if (screenType === MOBILE) {
    rotate = 90;
    jumpToReleventDiv("info-screen");
  } else {
    rotate = 180;
  }
};

const getScreen = () => {
  console.log("window.screen.availWidth ==>", window.screen.availWidth);
  if (window.screen.availWidth < 760) {
    screenType = MOBILE;
  } else {
    screenType = DESKTOP;
  }
};

$("#arrow").on("click", function () {
  if (!contentShowed) {
    showContent();
  } else {
    showInfo();
  }

  $(this).animateRotate(rotate, 500);
});

$("#form-cancel").on("click", function () {
  $("#form")[0].reset();
});

$.fn.animateRotate = function (angle, duration, easing, complete) {
  return this.each(function () {
    var $elem = $(this);

    $({ deg: -180 }).animate(
      { deg: angle },
      {
        duration: duration,
        easing: easing,
        step: function (now) {
          $elem.css({
            transform: "rotate(" + now + "deg)",
          });
        },
        complete: complete || $.noop,
      }
    );
  });
};
