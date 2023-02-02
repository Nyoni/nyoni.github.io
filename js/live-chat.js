(function($) {
    $(function() {
        console.log( "ready!" );
      
        var liveChat = $(".live-chat");
        var liveChatTrigger = $(".live-chat .trigger");
        var liveChatClose = $(".live-chat .start .close");
        liveChatTrigger.click(function() {
          if (liveChat.hasClass("open")) {
            liveChat.removeClass("open");  
          } else {
            liveChat.addClass("open");
          }
        });
        liveChatClose.click(function() {
          liveChat.removeClass("open");
        });
      
    });
  })( jQuery );