var snooze = require('snooze');

snooze.module('HelloServer')
		// Go to localhost:8000/hello/basic
		.route('get', '/hello/basic', {
			controller: 'HelloCtrl',
			action: 'sayHello',
			response: {
				200: 'MessageDTO'
			}
		})
		// Go to localhost:8000/hello/dto
		.route('get', '/hello/dto', {
			controller: 'HelloCtrl',
			action: 'sayHelloDTO',
			response: {
				200: 'HelloDTO'
			}
		})
		// Go to localhost:8000/hello/dto2
		.route('get', '/hello/dto2', {
			controller: 'HelloCtrl',
			action: 'sayHelloDTOParsed',
			// Optional
			// See more on routes and dtos in the documentation
			response: {
				200: 'HelloDTO'
			}
		})
		// Go to localhost:8000/hello/response?recipient=World
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
			},
			response: {
				200: 'MessageDTO'
			}
		})
		// Go to localhost:8000/hello/name/:World
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
			},
			response: {
				200: 'MessageDTO'
			}
		})
		// You'l need to test this with PostMan
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
			},
			response: {
				200: 'MessageDTO'
			}
		})
		// Go to localhost:8000/hello/excited
		.route('get', '/hello/excited', {
			controller: 'HelloCtrl',
			action: 'sayHelloFromService',
			response: {
				200: 'MessageDTO'
			}
		})
		// Go to localhost:8000/assets/hello/snooze.png
		.route('resource', '/assets/hello/*', {});