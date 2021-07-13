(function ($) {
	"use strict";

    $('[data-quantity-selector]').each(function() {

		var self = $(this)

		var spinner = self.find('[data-quantity-value]');
		var spinnerMin = spinner.attr('min') || 1;
		var spinnerMax = spinner.attr('max') || 1000;

		var up = self.find('[data-quantity-up]');
		var down = self.find('[data-quantity-down]');

		up.off().on('click', function(e) {
			e.preventDefault();
				var value = parseInt(spinner.val(), 10);
				value = isNaN(value) ? 0 : value;
				value++;
				if (spinnerMax >= value) {
					spinner.attr('value', value).val(value);
				}
		});
		down.off().on('click', function(e) {
			e.preventDefault();
			var value = parseInt(spinner.val(), 10);
			value = isNaN(value) ? 0 : value;
			if (value !== 0) {
				value--;
				if (spinnerMin <= value) {
					spinner.attr('value', value).val(value);
				}
			}
		});
	});

}(jQuery));
