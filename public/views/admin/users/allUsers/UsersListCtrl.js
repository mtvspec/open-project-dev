(function () {
	'use strict';
	
	angular.module('app')
	.controller('UsersListCtrl', function ($modal, UsersModel) {
		
		var vm = this;
		var users = {};
		
		var addUser = function () {
			$modal.open({
				templateUrl: 'views/admin/users/addUser/addUser.html',
				controller: 'UserAddCtrl',
				controllerAs: 'vm',
				size: 'md'
			})
		}
		vm.addUser = addUser;
		
		var deleteUser = function (userToDelete) {
			console.log(userToDelete);
			$modal.open({
				templateUrl: 'views/admin/users/deleteUser/deleteUser.html',
				controller: 'UserDeleteCtrl',
				controllerAs: 'vm',
				size: 'md',
				resolve: {
					user: function () {
						return userToDelete;
					}
				}
			})
		}
		vm.deleteUser = deleteUser;
		
		UsersModel.getAllUsers().then(function (users) {
			console.log(users);
			vm.users = users.data;
		})
	})
})();
