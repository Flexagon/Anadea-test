;(function($){
	jQuery.fn.gumhint = function(options){
		//Настройки
		var options = $.extend({ // Объединяем настройки в один объект
			'delay': '1000', // Выставляем задержку
			'animate': true // Выставляем анимацию
		}, options );
		var timeOut;

		$(this).on('mouseenter', function() { // Создаем нашу основную функцию для подсказок

			var $dataElement = $(this); // Помещаем наш инициализирующий класс в переменную

			timeOut = setTimeout(function(){
				if (!$dataElement.is(":hover")) { // Если мы наводим мышку не на наш объект
					return false; // То отменяем все действия по умолчанию
				}

				if ($dataElement.data("gumhint")){ // Проверяем наличие требуемого дата аттрибута

					var gumhintText = $dataElement.data("gumhint"); // Берем текст из дата аттрибута, и помещаем его в переменную

					$("body").append("<span class=gumhint style='display: none'>"+ gumhintText +"</span>"); // Добавляем блок с всплывающей подсказкой

					if(options.animate){ // Если включена анимация
						$('.gumhint').fadeIn(300); // То плавно показываем нашу подсказку (по умолчанию 0.3 секунды)
					} else { // Если же анимация выключена
						$('.gumhint').show(); // Просто показываем блок
					}

					$(".gumhint").each(function(){ // Выполняем функцию для проверки положения подсказки
						gumhintPosition($dataElement);
					});
				}
			}, options.delay);

		}).on('mouseleave', function() { // Когда убираем мышку с объекта
			clearTimeout(timeOut); // Отменяем выполнение кода
			$(".gumhint").remove(); // И убираем класс у нашей подсказки
		});

	};

	function gumhintPosition(el) { // Функция для проверки положения подсказки
		var gumhint = $(".gumhint"),
				widthGumHint = gumhint.outerWidth(), // Ширина блока подсказки
				heightGumHint = gumhint.outerHeight(), // Высота блока подсказки
				leftEl = el.offset().left, // Положение родительского элемента подсказки относительно окна
				topEl = el.offset().top,
				ElHeight = el.outerHeight(), //height hover element
				ElWidth = el.outerWidth(); //width hover element

		gumhint.css({"top": topEl+ElHeight+5,"left": leftEl+ElWidth/2, "margin-left": -widthGumHint/2}); // Высчитываем отступы подсказки от родительского элемента

		var rightScreenBorder = $(window).width() - (gumhint.offset().left + widthGumHint), // Высчитываем отступы подсказки относительно окна
				leftScreenBorder = gumhint.offset().left;

		if(leftScreenBorder < 0){ // Если отступ от левого края окна до подсказки меньше 0
			gumhint.css({"left": leftEl+ElWidth/1.7}); // То делаем новый отступ
		}
		if(rightScreenBorder < 0){ // Если отступ от правого края окна до подсказки меньше 0
			gumhint.css({"right": leftEl+ElWidth/1.7}); // ну вы поняли
		}
	}
})(jQuery); // Конец плагина
