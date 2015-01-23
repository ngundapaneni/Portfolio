$(function (){

/*Creates scrolling of sections*/
$('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

   $(this).click(function() {
            $(".nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

 /*Loads aniamted circles*/
 $('.loader1').ClassyLoader({
 	height: 80,
 	width: 100,
 	speed: 50,
    diameter: 30,
	fontSize: '20px',
    fontFamily: 'Courier',
    fontColor: '#444444',
    lineColor: '#444444',
    percentage: 100,
    lineWidth: 5,
    remainingLineColor: 'rgba(200,200,200,0.1)'
  });

 $('.loader2').ClassyLoader({
 	height: 80,
 	width: 100,
 	speed: 50,
    diameter: 30,
	fontSize: '20px',
    fontFamily: 'Courier',
    fontColor: '#559999',
    lineColor: '#559999',
    percentage: 100,
    lineWidth: 5,
    remainingLineColor: 'rgba(200,200,200,0.1)'
  });

 $('.loader3').ClassyLoader({
 	height: 80,
 	width: 100,
 	speed: 50,
    diameter: 30,
	fontSize: '20px',
    fontFamily: 'Courier',
    fontColor: '#FF2255',
    lineColor: '#FF2255',
    percentage: 80,
    lineWidth: 5,
    remainingLineColor: 'rgba(200,200,200,0.1)'
  });

  $('.cntl').cntl({
	 
		// The amount of "scroll padding" to allow 
		// The more, the later the state will be revealed
		revealbefore: 300,
		 
		// The animate class
		// This class should have animation rules in css
		anim_class: 'cntl-animate',
		 
		// A callback once the state has been revealed
		onreveal: null
 
	});
});

