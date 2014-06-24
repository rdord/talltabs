'use strict';

$(function() {
    $('#talltabs').organicTabs({
        fadingSpeed: 100,
        sizingSpeed: 100
    });

    $('.list-wrap').draggable({
			axis: 'y'
		});

	$('.list-wrap').bind('drag', function (event, ui) {
				var gap = ui.position.top + 20;

				if(gap < 10){
					ui.position.top = -10;
				}
				
				if(gap > 200){
					ui.position.top = 180;
				}
/*
				$('li a.current').css('padding-bottom', gap);
*/
			});


});

