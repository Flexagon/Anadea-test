$(function() {
	$('[data-tabs-buttons] > .tabs-buttons').click(function() {

		var set = $(this).parents('div').data('tabs-buttons');
		var index = $(this).index();

		$.each(['buttons', 'panels'], function(_, name) {
			makeActive($("[data-tabs-" + name + "=" + set + "] > div"), index);
		});

		function makeActive(el, index) {
			el.eq(index).addClass('active').siblings().removeClass('active');
		}
	});
});
