;(function($) {
	jQuery.fn.dater = function() {

		// var dataCount = $('body').getElementsByClassName("dater");
		// var dataContent = $dataCount.data("interval");

		if ($('time').hasClass('dater')) {
			var dataContent = $(this).data("interval");
			var dataArray = dataContent.split(',');
			// var dataClear = dataArray.toDateString([0]);




			for (i = 0; i < dataArray.length; i++) {
				dataArray[i] =  new Date(dataArray[i]).toDateString().slice(4,10);
				$("body").append("<span>"+ dataArray[i] +"</span>" + "<br>");

			}
			var lastDay = dataArray.length - 1;
			var dataArrayLength = dataArray.length;
			var lastDayDate = dataArray[lastDay].slice(4);
			console.log(dataArray);

			while (dataArray.length) {
				 dataArray.map(function(el, i){
				 if (el.slice(0, 3) === dataArray[0].slice(0, 3)) {
					arrSort.push(el)
				 } else {
					dataArray.splice(0, arrSort.length)
					console.log(arrSort[0] + " - " + arrSort[arrSort.length - 1] + ", " + arrSort.length + " days");
				 }
				})
				 console.log(arrSort, dataArray)
				}

			$(this).text(dataArray[0] + " - " + lastDayDate + ", " + dataArrayLength + " days");
		}

	};
})(jQuery);
