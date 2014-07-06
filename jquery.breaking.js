/*
 * jQuery breakingSlider v1.0.0
 * Copyright 2014 211J
 * Contributing Author: Leon Shelhamer
 */

(function ($) {

	//breakingSlider: Object Instance
	$.breakingSlider = function(element, options) {
		var breaking = $(element);

		// making variables public
		breaking.vars = $.extend({}, $.breakingSlider.defaults, options);
		
		breaking.addClass( 'breaking-slider' );
		
		$('.breaking-slider li').each(function(){
			var daily = $( 'h1', this ).text();
			var frontPage = $( 'h2', this ).text();
			var dummyText = $( 'p', this ).text();
			$( 'h1', this ).remove();
			$( 'h2', this ).remove();
			$( 'p', this ).remove();
		
			$( 'img', this ).wrap('<div class="news-paper"><div class="extra"><div class="extra-img"></div></div></div>');
		
			$( '.extra', this ).prepend('<div class="daily"><span>'+daily+'</span></div><div class="front-page"><span>'+frontPage+'</span></div>');
		
			$( 'img', this ).after('<div class="extra-extra read-all-about-it"><p>'+dummyText+'</p></div><div class="extra-extra read-all-about-it"><p>'+dummyText+'</p></div>');
		
			$( '.extra-img', this ).after('<div class="extra-extra"><p>'+dummyText+' '+dummyText+'</p><p>'+dummyText+'</p></div><div class="extra-extra"><p>'+dummyText+'</p><p>'+dummyText+' '+dummyText+'</p></div>');
			
		});
	
	};
	
	$.breakingSlider.defaults = {
	
	};
	
	//breakingSlider: Plugin Function
	$.fn.breakingSlider = function(options) {
	if (options === undefined) options = {};

	if (typeof options === "object") {
	return this.each(function() {
	var $this = $(this),
	selector = (options.selector) ? options.selector : ".breaking-slider > li",
	$slides = $this.find(selector);

	if ($this.data('breakingSlider') === undefined) {
	new $.breakingSlider(this, options);
	}
	});
	} else {
	// Helper strings to quickly perform functions on the slider
	var $slider = $(this).data('breakingSlider');
	}
	};
	
})(jQuery);