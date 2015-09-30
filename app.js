(function(){
	'use strict';
	
	var express = require('express');
	var app = express();
	var path = require('path');
	var favicon = require('serve-favicon');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var pg = require('pg');
	pg.defaults = {
		host: 'localhost',
		port: '5432',
		user: 'mtvspec',
		password: 'mtvspec',
		db: 'mtvspec'
	};

	var routes = require('./routes/index');
	var users = require('./routes/users');
	var user = require('user');
	var tasks = require('tasks');

	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

	app.use('/api/user', user)
	app.use('/api/tasks', tasks);
	app.use('/', routes);
	app.use('/users', users);

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// error handlers

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err
			});
		});
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});

	module.exports = app;

})();
