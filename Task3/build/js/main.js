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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG5cdCQoJy5kcm9wZG93bi10cmlnZ2VyJykuY2xpY2soIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHR2YXIgZGl2ID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCcuZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCgnLmRyb3Bkb3duX3VzZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JChkaXYpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKHRoaXMpLnBhcmVudHMoJy5kcm9wZG93bl91c2VyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9KTtcblxuXHQkKCdib2R5JykuY2xpY2soZnVuY3Rpb24oZSl7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdkcm9wZG93bi10cmlnZ2VyJykgJiYgJChlLnRhcmdldCkucGFyZW50cygnLmRyb3Bkb3duLXRyaWdnZXInKS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCQoJy5kcm9wZG93bl91c2VyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH1cblx0fSk7XG5cbn0pO1xuIl0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
