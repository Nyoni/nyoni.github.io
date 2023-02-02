$(document).ready(function() {

	var large = 1200,
			medium  = 900,
			small   = 600,
			highlighted  = 'overlaid';

	function changeNewsArticleClass() {
		var width = $(window).outerWidth();
		
		$('.accomodation_grids .accomodation_grid').addClass(highlighted);
		
		if (width > large) {
			$('.accomodation_grids .accomodation_grid:nth-child(1), .accomodation_grids .accomodation_grid:nth-child(4), .accomodation_grids .accomodation_grid:nth-child(6)').addClass(highlighted);
		}
		else if (width > medium && width <= large) {
			$('.accomodation_grids .accomodation_grid:nth-child(1), .accomodation_grids .accomodation_grid:nth-child(5)').addClass(highlighted);
		}
		else if (width > small && width <= medium) {
			$('.accomodation_grids .accomodation_grid:nth-child(1), .accomodation_grids .accomodation_grid:nth-child(4)').addClass(highlighted);
		}
		else if (width <= small) {
			$('.accomodation_grids .accomodation_grid').addClass(highlighted);
		}
	}

	changeNewsArticleClass();

	$(window).on('load resize', function() {
		changeNewsArticleClass();
	});

});