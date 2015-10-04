(function () {
	'use strict';
	
	angular.module('app')
	.factory('UsersModel', function ($http) {
		
		var _users = [];
		
		var _url = '/api/users';
		
		return {
			create: function (data) {
				return $http({
					method: 'POST',
					url: _url,
					data: data
				}).then(function (response) {
					console.log('Create user\n:', response.data);
					data.id = response.data.id;
					_users.push(data);
				})
			},
			getAllUsers: function () {
				return $http({
					method: 'GET',
					url: _url
				}, function (response) {
					console.log(response.data);
					var _users = response.data;
					return _users;
				})
			}
		}
	})
})();
