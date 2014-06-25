'use strict';

$(function() {

    $('#talltabs').organicTabs({
        fadingSpeed: 100,
        sizingSpeed: 100
    });

    $('.list-wrap').draggable({
			axis: 'y',
			containment: [0, 106, 0, 200],
			drag: function( event, ui ) {
				$('li a.current').height(ui.position.top);
			}
		});

});

