(function(){
	'use strict';

	angular.module('app')
	.controller('LoginCtrl', function ($state, UserModel) {
		
		var vm = this;
		
		var loginForm = {};
		vm.loginForm = loginForm;

		var user = {};
		vm.user = user;
		
		vm.submit = submit;

		function submit () {
			UserModel.getUserId(vm.user).then(function(){
				if(Number(user.role_id) === 1) {
					$state.go('admin.layout');
				} else if (Number(user.role_id) === 2) {
					$state.go('main.layout');
				} else {
					console.log('User not found');
					return;
				}
			})
		};
		
	});
	
})();