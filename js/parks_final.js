$(function(){

    var tabs = function() {
        $('#parks').css('height', $('.tab-content.active').height() + 400);
  
        $(window).resize(function(){
           $('#parks').css('height', $('.tab-content.active').height() + 400);
        });
  
        $('.tabs-nav > a').on('click', function(e){
           
           var tab = $(this).data('tab');
  
           $('.tabs-nav > a').removeClass('active');
           $(this).addClass('active');
  
           $('.tab-content').removeClass('active show');
           
           setTimeout(function(){
              $('.tab-content[data-tab-content="'+tab+'"]').addClass('active');
              $('#parks').css('height', $('.tab-content.active').height() + 400);
           }, 200);
           setTimeout(function(){
              $('.tab-content[data-tab-content="'+tab+'"]').addClass('show');
           }, 400);
           
  
           e.preventDefault();
        });
     };




     $(function(){

      tabs();
  
   });

});   