var snooze = require('snooze');

snooze.module('HelloServer').validator('NotATest', function() {
	return function(deferred, req) {
		deferred.resolve();
		//deferred.reject([500, 'Unkown Error']);
	};
})