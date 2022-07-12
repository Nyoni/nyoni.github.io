$(document).ready(function() {

	var large = 1200,
			medium  = 900,
			small   = 600,
			highlighted  = 'overlaid';

	function changeNewsArticleClass() {
		var width = $(window).outerWidth();
		
		$('.news .post').addClass(highlighted);
		
		if (width > large) {
			$('.news .post:nth-child(1), .news .post:nth-child(4), .news .post:nth-child(6)').addClass(highlighted);
		}
		else if (width > medium && width <= large) {
			$('.news .post:nth-child(1), .news .post:nth-child(5)').addClass(highlighted);
		}
		else if (width > small && width <= medium) {
			$('.news .post:nth-child(1), .news .post:nth-child(4)').addClass(highlighted);
		}
		else if (width <= small) {
			$('.news .post').addClass(highlighted);
		}
	}

	changeNewsArticleClass();

	$(window).on('load resize', function() {
		changeNewsArticleClass();
	});

});