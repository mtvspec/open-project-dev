(function () {
	'use strict';
	
	angular.module('app')
	.controller('UserDeleteCtrl', function ($scope, UsersModel, user) {
		var vm = this;
		var userDeleteForm = {};
		vm.userDeleteForm = userDeleteForm;
		var userToDelete = {};
		vm.userToDelete = user;
		vm.submit = submit;
		
		function submit() {
			console.log(userToDelete);
			UsersModel.remove(user).then(function () {
				$scope.$close();
			})
		}
	})
})();