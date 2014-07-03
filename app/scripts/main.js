'use strict';

$(function() {
	var currentTabHeight = 47;

		/* Tab menu */
    $('.talltabs').organicTabs({
        fadingSpeed: 100,
        sizingSpeed: 100
    });

    /* Keyboard control */
    $(document).keydown(function(event) {
			if (event.which === 38) {
				currentTabHeight--;
			} else if (event.which === 40){
				currentTabHeight++;
			}

			if (currentTabHeight < 37) {
				currentTabHeight = 37;
			}
			$('.talltabs .menu li a.current').css('height', currentTabHeight);
			$('.talltabs .content').css('top', currentTabHeight + 90);
			$('.heightLabel').text(currentTabHeight - 21);
		});

    /* Mouse drag control */
    $('.content').draggable({
			axis: 'y',
			containment: [0, 127, 0, 2000],
			cancel: '.heightLabel',
			drag: function( event, ui ) {
				currentTabHeight = ui.position.top - 90;
				$('.talltabs .menu li a.current').height(currentTabHeight);
				$('.heightLabel').text(currentTabHeight - 21);
			}
		});
		
	/* Settings */
	$('.talltabs .menu li a').click(function() {
		if ($('#lockState').prop('checked')) {
			$('.talltabs .menu li a').not(this).css('height', '16');
		}
		$(this).css('height', currentTabHeight);
	});

});

