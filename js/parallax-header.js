$(window).scroll(function(){
    parallax();
  });
  
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.hero-section').css('top',-(scrolled*0.1)+'px');
    $('.hero-inner').css('top',50+(scrolled*0.1)+'%');
    $('.hero-inner').css('opacity',1-(scrolled*0.01)/10);
    $('.hero-inner').css('opacity',1-(scrolled*0.01)/10);
  };