var snooze = require('snooze');

snooze.module('HelloServer')
		.service('Hello', function() {

			// Returns 20 copies of the str concatenated
			var _getExcited = function(str) {
				var copies = [];
				for(var i = 0; i < 20; i++) {
					copies.push(str);
				}

				return copies.join(' ');
			};

			return {
				getExcited: _getExcited
			};
		});