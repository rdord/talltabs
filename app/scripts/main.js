'use strict';

$(function() {
	var currentTabHeight;

    $('#talltabs').organicTabs({
        fadingSpeed: 100,
        sizingSpeed: 100
    });

    $('.list-wrap').draggable({
			axis: 'y',
			containment: [0, 106, 0, 200],
			drag: function( event, ui ) {
				currentTabHeight = ui.position.top - 90;
				$('li a.current').height(currentTabHeight);
				
			}
		});

	$('.nav li a').click(function() {
		$('.nav li a').not(this).css('height', '16');
		$(this).css('height', currentTabHeight);
	});

});

