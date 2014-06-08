var snooze = require('snooze');

snooze.module('HelloServer')
		.dto('HelloDTO', {
			greeting: {
				type: 'string',
				description: 'What to greet the recipient with.',
				example: 'Salutations',
				required: true
			},
			recipient: {
				type: 'string',
				description: 'Who to greet',
				example: 'John'
			},
			__methods: {
				fromString: function() {
					return function(str) {
						var parts = str.split(' ');

						return {
							greeting: parts[0],
							recipient: parts[1]
						};
					};
				}
			}
			// Uncomment for 'strict' use. Additional unknown properties will
			//		cause a fatal error.
			//,__strict: true 
		});