;(function($){
	jQuery.fn.gumhint = function(options){
		//Options
		var options = $.extend({
			'delay': '1000',
			'animate': true
		}, options );
		var timeOut;

		$(this).on('mouseenter', function() {
				var $dataElement = $(this);

				timeOut = setTimeout(function(){
			if (!$dataElement.is(":hover")) {
				return false;
			}

			// Check exist data-attribute data-gumhint
			if ($dataElement.data("gumhint")){
				// gumhint text
				var gumhintText = $dataElement.data("gumhint");

				// add gumhint in DOM
				$("body").append("<span class=gumhint style='display: none'>"+ gumhintText +"</span>");
				//check animate option
				if(options.animate){
					$('.gumhint').fadeIn(300);
				} else {
					$('.gumhint').show();
				}

				// set position hit
				$(".gumhint").each(function(){
					gumhintPosition($dataElement);
				});
			}
			}, options.delay);

		}).on('mouseleave', function() {
			clearTimeout(timeOut);
			$(".gumhint").remove();
		});

	};

	function gumhintPosition(el) {
		var gumhint = $(".gumhint"),
				widthGumHint = gumhint.outerWidth(),
				heightGumHint = gumhint.outerHeight(),
				leftEl = el.offset().left,
				topEl = el.offset().top,
				ElHeight = el.outerHeight(), //height hover element
				ElWidth = el.outerWidth(); //width hover element

		var posElLeft = el.offset().left,
				posElTop = el.offset().top;

	gumhint.css({"top": topEl+ElHeight+5,"left": leftEl+ElWidth/2, "margin-left": -widthGumHint/2});

	// if hint out of screen border's
		var rightScreenBorder = $(window).width() - (gumhint.offset().left + widthGumHint),
				leftScreenBorder = gumhint.offset().left;

	if(leftScreenBorder < 0){
		gumhint.css({"left": leftEl+ElWidth/1.7});
	}
	if(rightScreenBorder < 0){
		gumhint.css({"right": leftEl+ElWidth/1.7});
	}
	}
})(jQuery);
