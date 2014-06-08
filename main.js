var snooze = require('snooze');
require('snooze-stdlib');

snooze.module('HelloServer')
		.libs(['routes', 'controllers', 'services', 'validators', 'dtos'])
		.setPort(8000);

snooze.module('HelloServer').wakeup();