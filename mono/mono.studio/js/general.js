$(".hamburger").removeClass("hidden");

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height  > 200) {
        $(".freccia").css("visibility","hidden");
        
    }
    if(height  < 300) {
      $('#page-title').addClass('hidden');
    }
    if(height  > 400) {
      $('#page-title').removeClass('hidden');
    }
});

