$(document).ready(function() {
    "use strict";
    $('.zimparks_menu > ul > li:has( > ul)').addClass('zimparks_menu-dropdown-icon');
    $('.zimparks_menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".zimparks_menu > ul").before("<a href=\"#\" class=\"zimparks_menu-mobile\">&nbsp;</a>");
    $(".zimparks_menu > ul > li").hover(function(e) {
      if ($(window).width() > 943) {
        $(this).children("ul").stop(true, false).fadeToggle(50);
        e.preventDefault();
      }
    });
    $(".zimparks_menu > ul > li").click(function() {
      if ($(window).width() <= 943) {
        $(this).children("ul").fadeToggle(50);
      }
    });
    $(".zimparks_menu-mobile").click(function(e) {
      $(".zimparks_menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
    });
  });
  $(window).resize(function() {
    $(".zimparks_menu > ul > li").children("ul").hide();
    $(".zimparks_menu > ul").removeClass('show-on-mobile');
  });