$(window).scroll(function () {
    var x = $(this).scrollTop();

    if (x >= 50) {
        $("header").addClass("header-bg");
    }
    else {
        $("header").removeClass("header-bg");
    }
})


$('.banner-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: false,
  
});

$('.your-class').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 800,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }]
});




$('.res').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: false,
  // <button type="button" class="slick-next">Next</button>
  
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }]
});



$('.gap-phone').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1200,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: false,
  // <button type="button" class="slick-next">Next</button>
  
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }]
});







(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});

// =================================

        // Counter

        const animationDuration = 3000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(animationDuration / frameDuration);
        const easeOutQuad = t => t * (2 - t);

        const animateCountUp = el => {
            let frame = 0;
            const countTo = parseInt(el.innerHTML, 10);

            const counter = setInterval(() => {
                frame++;
                const progress = easeOutQuad(frame / totalFrames);
                const currentCount = Math.round(countTo * progress);

                if (parseInt(el.innerHTML, 10) !== currentCount) {
                    el.innerHTML = currentCount;
                }

                if (frame === totalFrames) {
                    clearInterval(counter);
                }
            }, frameDuration);
        };

        // Observe each count-up element
        const countupEls = document.querySelectorAll('.timer-counter');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCountUp(entry.target);
                    observer.unobserve(entry.target); // Stop observing once animation starts
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        countupEls.forEach(el => observer.observe(el));


$(function () {

            // Cache the button element
            const $button = $('.toggle-btn');

            // Cache cards that should toggle
            const $cards = $('.hide-by-default');

            // If nothing to toggle, remove the button
            if ($cards.length === 0) {
                $button.remove();
                return;
            }

            // Click handler for show more / less
            $button.on('click', function () {

                // Check current state by testing first card
                const isHidden = $cards.first().is(':hidden');

                if (isHidden) {
                    // SHOW: animate cards into view
                    $cards.slideDown(250);          // smooth vertical animation
                    $button.html('Show less <i class="fa-solid fa-angle-up"></i>');      // update label
                } else {
                    // HIDE: animate cards out of view
                    $cards.slideUp(250);            // smooth collapse
                    $button.html('Show more <i class="fa-solid fa-angle-down"></i>');      // reset label
                }

            });

        });
