(function () {
	'use strict';
	
	angular.module('app')
	.factory('UsersModel', function ($http) {
		
		var _users = [];
		
		var _url = '/api/users/';
		
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
			remove: function(data){
				console.log('Remove user:', data);
				return $http({
					method: 'DELETE',
					url: _url + data.id
				}).then(function(){
					var i, len;
					for(i = 0, len = _users.length; i < len; i++){
						if(_users[i].id === data.id){
							_users.splice(i, 1);
							break;
						}
					}
				}, function(response){
					console.error('DELETE user:', response.status.statusText);
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
