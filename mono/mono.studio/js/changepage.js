function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();
// var bottone = $('.menu-btn');
// var menu = $('.menu');
// var close = $('.close');
// var hamburger = $('.hamburger');
var show  = 0;
var s = 0.1; 

$(document).on('click', '.menu-btn', function (a) {    
    a.preventDefault();
    if ($('#page-title').hasClass('hidden')){
      show = 0;
    }
    else{
      $('#page-title').addClass('hidden');
      show=1;
    }
    $('.hamburger').addClass('hidden');
    $(".menu ul li a").each(function(index){
             $(this).css({
                  'transition-delay' : s*(1+index) + 's'
             });
         });    
    $(".menu ul li span").each(function(index){
             $(this).css({
                  'transition-delay' : s*(1+index) + 's'
             });
         });    
    $(".menu .links li a").each(function(index){
             $(this).css({
                  'transition-delay' : 0.4+s*(0.5+index) + 's'
             });
         });    
    $(".menu .links li span").each(function(index){
             $(this).css({
                  'transition-delay' : 0.4+s*(0.5+index) + 's'
             });
         });    
    $('.close').addClass('animate');
    $('.hamburger').one(transitionEvent,   
      function() {
        $('.menu').toggleClass('open');
        $('.menu ul li a').addClass("animate");
        $('.menu ul li span').addClass("animate");
        $('.menu').one(transitionEvent,   
          function() {
            $('.menu ul li a').css("transition-delay", "0");
            $('.menu ul li span').css("transition-delay", "0");
          });
        $('body').css('overflow', 'hidden');
    });
});

$(document).on('click', '.close', function (a) { 
    a.preventDefault();
    $('.menu ul li a').removeClass("animate");
    $('.menu ul li span').removeClass("animate");
    $('.close').removeClass('animate');
    $('.menu').toggleClass('open');
    $('body').css('overflow', 'auto');
  
    $('.menu').one(transitionEvent,   
      function(e) {
        $('.hamburger').removeClass('hidden');
        if(show == 1) {
          $('#page-title').removeClass('hidden');
          show = 0;
        }
    });
});

$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 2,
    // blacklist: '.no-smoothState',
    onStart: {
      duration: 1000, // Duration of our animation
      render: function ($container) {
        if ($('.menu').hasClass('open')){
          $('.menu ul li a').removeClass("animate");
          $('.close').removeClass('animate');
          $('.menu').toggleClass('open');
          $('.menu').one(transitionEvent,   
          function() {
            $('body').css('overflow', 'visible');
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          });
        }
        else{
          // Add your CSS animation reversing class
          $('#page-title').addClass('hidden');
          $('.hamburger').addClass('hidden');
          $container.addClass('is-exiting');
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
        
      }
    },
    
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');
        // sr.init()
        // Inject the new content
        $container.html($newContent);
        $('img').each(function(){
          new RetinaImage(this);
        });
        $('.hamburger').removeClass('hidden');

        if(document.getElementsByClassName(".galleria") !== null && $('.galleria').slick) {
          $('.galleria').slick({
            // centerMode: true,
            slidesToShow: 1,
            speed: 500,
            infinite: false,
            cssEase: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
            variableWidth: true,
            arrows: false,
          });
          $('.container_arrow .slick-prev').click(function(e) {
            e.preventDefault();
            $('.galleria').slick('slickPrev');
          });
          $('.container_arrow .slick-next').click(function(e) {
            e.preventDefault();
            $('.galleria').slick('slickNext');
          });
        }

        if(document.getElementsByClassName(".culture-page" !== null )) {
          cultureInit();
        }
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});