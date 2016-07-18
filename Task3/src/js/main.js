$(document).ready(function() {

	$('.dropdown-trigger').click( function(event){
		var div = $(this).attr('href');
		event.preventDefault();
		$('.dropdown').removeClass('active');
		$('.dropdown_user').removeClass('active');
		$(div).toggleClass('active');
		$(this).parents('.dropdown_user').toggleClass('active');
	});

	$('body').click(function(e){
		e.stopPropagation();
		if (!$(e.target).hasClass('dropdown-trigger') && $(e.target).parents('.dropdown-trigger').length === 0) {
			$('.dropdown').removeClass('active');
			$('.dropdown_user').removeClass('active');
		}
	});

});
