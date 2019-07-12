$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 100) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });
  
  //onclick method for dropdowns toggling on and off
  $(".fa-minus").toggle();
  $(".dropdown1").toggle();
  $(".dropdown2").toggle();

  $(".toggle-drop1").click(function() {
    $(".td1").toggle();
    $(".dropdown1").toggle();
  });

  $(".toggle-drop2").click(function() {
    $(".td2").toggle();
    $(".dropdown2").toggle();
  });

  $('.toggle-drop1').hover(function() {
    $('.td1').addClass("rotation");
  }, function() {
    $('.td1').removeClass("rotation");
  });

  $('.toggle-drop2').hover(function() {
    $('.td2').addClass("rotation");
  }, function() {
    $('.td2').removeClass("rotation");
  });

});

