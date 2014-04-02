// Dribble API Interface
// 1. Return data from api
// 2. parse & output data on screen
// 3. learn about templating api data
// 4. best practices for things

'use strict';

(function ($){
	var getEntries = null,
		displayEntries = null,
		displayShotInfo = null,
		listUrl = 'http://api.dribbble.com/shots/everyone',
		perPage = 15;
	
	getEntries = function getEntriesF(count) {
		// using jQuery $.ajax
		// https://api.jquery.com/jQuery.ajax/
		//
		
		var req = $.ajax({
			url: listUrl,
			dataType: 'jsonp',
			data: {
				per_page: count
			},
			type: 'GET'
		});
		
		req.done(displayEntries);
	};
	
	displayEntries = function displayEntriesF(data) {
		var shots = document.createElement('div'),
			shot = null,
			data = {
				'array': data.shots
			};
		
		shots = doT.template(document.getElementById('tpl-shot').text);
		
		document.body.innerHTML = shots(data);
	};
	
	displayShotInfo = function displayShotInfoF(id) {
		
	}
	
	getEntries();
		
})(jQuery);
