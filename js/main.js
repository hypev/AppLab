$(document).ready(function () {
  $(".menu-wrapper").click(function () {
    var menuH = $(".menu-hamburger");
    menuH.toggleClass("is-active");
    if (menuH.hasClass("is-active")) {
      $(".menuPage").css("clip-path", "circle(145% at 100% 0%)");
      $(".menuPage").css("-webkit-clip-path", "circle(145% at 100% 0%)");
      $(".menu-hamburger.F, .menu-hamburger.S, .menu-hamburger.T").css("background", "#fff");
      $(".menu-hamburger.F, .menu-hamburger.S, .menu-hamburger.T").css("transition-delay", ".2s");
    }
    else {
      $(".menuPage").css("clip-path", "circle(0% at 100% 0%)");
      $(".menuPage").css("-webkit-clip-path", "circle(0% at 100% 0%)");
      $(".menu-hamburger.F, .menu-hamburger.S, .menu-hamburger.T").css("background", "#242f51");
      $(".menu-hamburger.F, .menu-hamburger.S, .menu-hamburger.T").css("transition-delay", ".3s");
    }
  });

  $(".menu-links").on("click", "a", function (event) {
    $(".menuPage").css("clip-path", "circle(0% at 100% 0%)");
    $(".menuPage").css("-webkit-clip-path", "circle(0% at 100% 0%)");
    $(".menu-hamburger.F, .menu-hamburger.S, .menu-hamburger.T").css("background", "#242f51");
    $(".menu-hamburger.F, .menu-hamburger.S, .menu-hamburger.T").css("transition-delay", ".3s");
    $(".menu-hamburger").removeClass('is-active');

    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').delay(700).animate({ scrollTop: top }, 700);
  });

  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700);
  });

  $(".button").on("click", function (event) {
    var tryIt = $(".try-now");
    var tryForm = $(".try-form");
    var overlay = $(".overlay");
    tryIt.toggleClass("hide");
    overlay.css("display", "block");

    setTimeout(() => {
      overlay.css("background-color", "rgba(0, 0, 0, 0.5)");
      tryForm.css("opacity", "1");
      tryIt.css("transform", "scale(1)");
    }, 100);
  });

  function closeForm() {
    var tryIt = $(".try-now");
    var tryForm = $(".try-form");
    var overlay = $(".overlay");
    tryIt.toggleClass("hide");
    overlay.css("background-color", "rgba(0, 0, 0, 0)");
    tryIt.css("transform", "scale(0)");
    tryForm.css("opacity", "0");

    setTimeout(() => {
      overlay.css("display", "none");
    }, 400);
  }

  $(".close-form").on("click", function (event) {
    closeForm();
  });

  $(".try-form-button").on("click", function (event) {
    var tryForm = $(".try-form");
    var trySubmit = $(".submit");

    tryForm.css("opacity", "0");
    tryForm.css("transform", "scale(0.6, 0.1)");
    trySubmit.css("opacity", "1");
    setTimeout(() => {
      trySubmit.css("opacity", 0);
      setTimeout(closeForm, 700);
      setTimeout(() => {
        tryForm.css("opacity", "1");
        tryForm.css("transform", "scale(1)");
      }, 1000);
    }, 800);
  });

  $(".video-link").on("click", function (event) {
    var videoPlayer = $(".video-player");
    var video = $(" iframe.video");
    var overlay = $(".overlay");
    var closeBtn = $(".close-video");
    videoPlayer.toggleClass("hide");
    overlay.css("display", "block");
    closeBtn.css("opacity", "1");
    closeBtn.css("right", "5%");
    closeBtn.css("top", "5%");
    video.toggleClass("active");

    setTimeout(() => {
      overlay.css("background-color", "rgba(0, 0, 0, 0.5)");
      video.css("opacity", "1");
      videoPlayer.css("transform", "scale(1)");
    }, 100);
  });

  $(".close-video").on("click", function (event) {
    var videoPlayer = $(".video-player");
    var video = $(" iframe.video");
    var overlay = $(".overlay");
    var closeBtn = $(".close-video");
    videoPlayer.toggleClass("hide");
    overlay.css("background-color", "rgba(0, 0, 0, 0)");
    videoPlayer.css("transform", "scale(0)");
    video.css("opacity", "0");
    video.toggleClass("active");
    closeBtn.css("opacity", "0");
    closeBtn.css("right", "0");
    closeBtn.css("top", "0");

    setTimeout(() => {
      overlay.css("display", "none");
    }, 400);
  });

  $(".sub-switch button").on("click", function (event) {
    if (!$("#" + this.id).hasClass("active")) {
      $(".sub-switch button").toggleClass("active");
      $(".sub-switch").toggleClass("left");
      $(".sub-switch").toggleClass("right");
      $(".sub-cards").toggleClass("active");
      $(".sub-cards-list").toggleClass("left");
      $(".sub-cards-list").toggleClass("right");
    }
  });

  $(".faq-question").on("click", function (event) {
    var faqElement = $(".faq-element:has(> #" + this.id + ")");
    faqElement.toggleClass("hide");
  });

  var clientsList = $(".clients-list");
  var clientCount = clientsList.children().length;
  clientsList.css("width", (clientCount * 100) + "%");
  var clientSliderOffset = 0;
  var clientShift = 100 / clientCount;

  function checkClientsButton(activeId) {
    if (activeId == 1)
      $(".clients-prev").prop("disabled", true);
    else if (activeId == clientCount)
      $(".clients-next").prop("disabled", true);
    else {
      $(".clients-prev").prop("disabled", false);
      $(".clients-next").prop("disabled", false);
    }
  }

  $(".clients-prev").on("click", function (event) {
    var activeClient = $(".client-element.active");
    var activeId = +activeClient.attr("id").replace(/^\D+/g, '');
    var prevClient = $("#client" + (activeId - 1) + ".client-element");
    clientSliderOffset += clientShift;
    checkClientsButton(activeId - 1);
    activeClient.toggleClass("active");
    prevClient.toggleClass("active");
    $(".clients-list").css("transform", "translateX(" + clientSliderOffset + "%)");
  });
  $(".clients-next").on("click", function (event) {
    var activeClient = $(".client-element.active");
    var activeId = +activeClient.attr("id").replace(/^\D+/g, '');
    var nextClient = $("#client" + (activeId + 1) + ".client-element");
    clientSliderOffset -= clientShift;
    checkClientsButton(activeId + 1);
    activeClient.toggleClass("active");
    nextClient.toggleClass("active");
    $(".clients-list").css("transform", "translateX(" + clientSliderOffset + "%)");
  })
});