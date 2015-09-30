(function(){
	'use strict';

	angular.module('app')
	.controller('LoginCtrl', LoginCtrl);

		function LoginCtrl($scope, $state, UserModel) {
		// TODO
		$scope.loginForm = {};

		$scope.user = {};

		$scope.logIn = function(){
		};

			/*
			UserModel.readUser($scope.user).then(function(){
				
			})
			*/

	}

})();