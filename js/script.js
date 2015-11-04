jQuery.noConflict();
jQuery(function($) {
	
	$(document).on('unload', function() {
		 $('.inner .page-header h1').removeClass('small');
		 $('.frames').fadeOut();
		 alert('bye');
	});
	
	
	$(window).load(function() {
		/*	after full load	*/
		$('.page-header h1').removeClass('small');
		$('.inner .page-header h1').addClass('small');
		$('.frames').fadeIn(1000).queue(function() {
			$(this).addClass('sheet-ended');
			$(this).dequeue();
		}); 
	});
	
	/*	carousel	*/
	$('#carousel').jcarousel({
		scroll: 1,
		auto: 3,
		wrap: 'both',
		itemFirstInCallback:  function(carousel, item, idx, state){
			// progress bar control
			var width = 10;
			switch(idx) {
				case 1: width = 10; break;
				case 2: width = 58; break;
				case 3: width = 106; break;
				case 4: width = 155; break;
				case 5: width = 203; break;
				case 6: width = 251; break;
				case 7: width = 299; break;
			}
			$('.progress-bar .bar').width(width);
		},
		initCallback: function(carousel) {
		    // Disable autoscrolling if the user clicks the prev or next button.
    		carousel.buttonNext.bind('click', function() {
    	    	carousel.startAuto(0);
    		});
		    carousel.buttonPrev.bind('click', function() {
        		carousel.startAuto(0);
    		});
    		// Pause autoscrolling & show controls if the user moves with the cursor over the carousel.
    		$('.jcarousel-container').hover(function() {
        		carousel.stopAuto();
				$('.jcarousel-next-horizontal, .jcarousel-prev-horizontal').fadeIn();
    			}, function() {
        		carousel.startAuto(3);
				$('.jcarousel-next-horizontal, .jcarousel-prev-horizontal').fadeOut();
		    });
			// Initial hide controls
			$('.jcarousel-next-horizontal, .jcarousel-prev-horizontal').hide();
		}
    });
});






