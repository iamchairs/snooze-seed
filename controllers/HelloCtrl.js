var snooze = require('snooze');

snooze.module('HelloServer').controller('HelloCtrl', function(HelloDTO, Hello) {
	var _sayHello = function(res, options) {
		res.send(200, 'Hello World!');
	};

	var _sayHelloDTO = function(res, options) {
		res.send(200, HelloDTO.$create({
			greeting: 'Hello',
			recipient: 'World'
		}));
	};

	var _sayHelloDTOParsed = function(res, options) {
		res.send(200, HelloDTO.fromString('Hello World!'));
	};

	var _sayHelloFromQuery = function(res, options) {
		res.send(200, 'Hello ' + options.query.recipient + '!');
	};

	var _sayHelloFromService = function(res, options) {
		res.send(200, Hello.getExcited('Hello World!'));
	};

	var _sayHelloFromParam = function(res, options) {
		res.send(200, 'Hello ' + options.params.recipient + '!');
	};

	var _sayHelloFromBody = function(res, options) {
		res.send(200, 'Hello ' + options.body.recipient + '!');
	};

	return {
		sayHello: _sayHello,
		sayHelloDTO: _sayHelloDTO,
		sayHelloDTOParsed: _sayHelloDTOParsed,
		sayHelloFromQuery: _sayHelloFromQuery,
		sayHelloFromService: _sayHelloFromService,
		sayHelloFromParam: _sayHelloFromParam,
		sayHelloFromBody: _sayHelloFromBody
	};
});