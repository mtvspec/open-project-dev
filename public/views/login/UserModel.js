(function () {
	'use strict';
	
	angular.module('app')
	.factory('UserModel', function ($http) {
		
		var _user = [];
		var _url = '/api/user';
		
		return {
			getUserId: function (data) {
				return $http({
					method: 'POST',
					url: _url,
					data: data
				}).then(function (response) {
					data.id = response.data.id;
					data.role_id = response.data.role_id;
					_user.push(data);
					console.log('User:', _user);
				})
			},
			getUser: function () {
				return _user;
			}
		}
	});
})();