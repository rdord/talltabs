'use strict';

$(function() {

	function handleKeys(e) {
		var KEY_UP = 38,
				KEY_DOWN = 40,
				currentHeight = $('li a.current').css('height');

		switch (e.keyCode) {
			case KEY_UP:
				$('li a.current').css('height', currentHeight - 10);
				break;
			case KEY_DOWN:
				$('li a.current').css('height', currentHeight + 10);
				break;
		}
	}

	$('body').on('keypress', handleKeys);

	$('#talltabs').organicTabs({
		fadingSpeed: 100,
		sizingSpeed: 100
	});

	$('li a.current').resizable({
		handles: 's',
		minWidth: 97,
		maxWidth: 97,
		minHeight: 1,
		maxHeight: 200
	});
});

