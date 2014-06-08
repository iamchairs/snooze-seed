var snooze = require('snooze');

snooze.module('HelloServer')
		.route('get', '/hello/basic', {
			controller: 'HelloCtrl',
			action: 'sayHello'
		})
		.route('get', '/hello/dto', {
			controller: 'HelloCtrl',
			action: 'sayHelloDTO'
		})
		.route('get', '/hello/dto2', {
			controller: 'HelloCtrl',
			action: 'sayHelloDTOParsed',
			// Optional
			// See more on routes and dtos in the documentation
			response: {
				200: '@HelloDTO'
			}
		})
		.route('get', '/hello/respond', {
			controller: 'HelloCtrl',
			action: 'sayHelloFromQuery',
			// Optional
			// See more on routes and dtos in the documentation
			request: {
				query: {
					recipient: {
						type: 'string'
					}
				}
			}
		})
		.route('get', '/hello/name/:recipient', {
			controller: 'HelloCtrl',
			action: 'sayHelloFromParam',
			// Optional
			// See more on routes and dtos in the documentation
			request: {
				params: {
					recipient: {
						type: 'string'
					}
				}
			}
		})
		.route('post', '/hello/body', {
			controller: 'HelloCtrl',
			action: 'sayHelloFromBody',
			// Optional
			// See more on routes and dtos in the documentation
			request: {
				body: {
					recipient: {
						type: 'string'
					}
				}
			}
		})
		.route('get', '/hello/excited', {
			controller: 'HelloCtrl',
			action: 'sayHelloFromService'
		})
		// Go to localhost:8000/assets/hello/snooze.png
		.route('resource', '/assets/hello/*', {});