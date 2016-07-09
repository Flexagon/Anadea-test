$(document).ready(function() {

	$('.dropdown-trigger').click( function(event){
		var div = $(this).attr('href');
		event.preventDefault();
		$('.dropdown-block').removeClass('active');
		$('.user, .user-last').removeClass('active');
		$(div).toggleClass('active');
		$(this).parents('.user, .user-last').toggleClass('active');
	});

	$('body').click(function(e){
		e.stopPropagation();
		if (!$(e.target).hasClass('dropdown-trigger') && $(e.target).parents('.dropdown-trigger').length == 0) {
			$('.dropdown-block').removeClass('active');
			$('.user, .user-last').removeClass('active');
		}
	});

});
