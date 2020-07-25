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

var documentHeight = document.getElementById('projects').scrollHeight;

// Add some unique identifier to the string being passed
var message = 'documentHeight:'+documentHeight;

// Pass message to (any) parent document
parent.postMessage(message, "*");

// Setup event listener
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen for event
eventer(messageEvent,function(e) {

  // Check that message being passed is the documentHeight
  if (  (typeof e.data === 'string') && (e.data.indexOf('documentHeight:') > -1) ) {
    
    // Split string from identifier
    var height = e.data.split('documentHeight:')[1];

   // do stuff with the height

  } 
},false);

});

