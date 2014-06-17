var snooze = require('snooze');

snooze.module('HelloServer')
		.dto('MessageDTO', {
			message: {
				type: 'string',
				description: 'A message from the server.',
				example: '404 Error',
				required: true
			}
		});