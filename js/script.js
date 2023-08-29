$(document).ready(function () {

  $(".ham-btn").click(function () {
    $(".header-links").toggleClass("active");

    if ($(".header-links").hasClass("active")) {
      $(".ham-btn").html(`<i class="fa fa-times"></i>`);
    } else {
      $(".ham-btn").html(`<i class="fa fa-solid fa-bars"></i>`);
    }
  });

  $("#call").click(function(){
    
  })
});

