var snooze = require('snooze');
require('snooze-stdlib');

snooze.module('HelloServer', ['snooze-stdlib'])
		.libs(['controllers', 'services', 'validators', 'dtos', 'routes'])
		.setPort(8000);

snooze.module('HelloServer').wakeup();