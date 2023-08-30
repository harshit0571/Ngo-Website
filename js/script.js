$(document).ready(function () {
  $(".ham-btn").click(function () {
    $(".header-links").toggleClass("active");

    if ($(".header-links").hasClass("active")) {
      $(".ham-btn").html(`<i class="fa fa-times"></i>`);
    } else {
      $(".ham-btn").html(`<i class="fa fa-solid fa-bars"></i>`);
    }
  });

  $(".links").click(function () {
    $(".footer-links-ul").toggleClass("active-links");
    console.log("d");
  });

  $(".contact-btn").click(function () {
    $(".contact-container").toggleClass("contact-container-active");
    console.log("d");
  });

  $(".gal-btn").click(function () {
    $(".gal-container").toggleClass("gal-container-active");
    console.log("d");
  });
});
