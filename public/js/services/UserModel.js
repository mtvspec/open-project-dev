(function(){
	'use strict';
	
	angular.module('app')
	.factory('UserModel', UserModel);
	
	var _url = '/api/user';
	
	function UserModel($http){
		return {
			readUser: function(user){
				return $http({
					method: 'POST',
					url: _url,
					data: user
				}).then(function(response){
					console.log(response.data);
				})
			}
		}
	}
})();