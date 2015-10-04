(function () {
	'use strict';
	
	angular.module('app')
	.controller('UsersListCtrl', function ($modal, UsersModel) {
		var vm = this;
		var users = {};
		
		var addUser = function () {
			$modal.open({
				templateUrl: 'views/admin/users/addUser/AddUser.html',
				controller: 'UserAddCtrl',
				controllerAs: 'vm',
				size: 'md'
			})
		}
		vm.addUser = addUser;
		
		UsersModel.getAllUsers().then(function (users) {
			console.log(users);
			vm.users = users.data;
		})
	})
})();
