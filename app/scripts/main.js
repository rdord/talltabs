'use strict';

$(function() {
	var currentTabHeight;

    $('.talltabs').organicTabs({
        fadingSpeed: 100,
        sizingSpeed: 100
    });

    $('.content').draggable({
			axis: 'y',
			containment: [0, 106, 0, 200], /*unlocked: 200 -> 2000*/
			drag: function( event, ui ) {
				currentTabHeight = ui.position.top - 90;
				$('li a.current').height(currentTabHeight);
				
			}
		});
		
 /* locked */
	$('.menu li a').click(function() {
		$('.menu li a').not(this).css('height', '16');
		$(this).css('height', currentTabHeight);
	});

});

