(function(){
	'use strict';
	
	angular.module('app')
	.controller('UserAddCtrl', function ($scope, UsersModel) {
		
		var vm = this;

		var userAddForm = {};

		vm.userAddForm = userAddForm;

		var userToAdd = {};

		vm.userToAdd = userToAdd;

		hasError = hasError;
		vm.submit = submit;

		function hasError (fieldName) {
			var field = userAddForm[fieldName];
			if (field) {
				return field.$invalid && (userAddForm.$submitted || !field.$pristine);
			}
		}

		function submit () {
			vm.userAddForm.$setSubmitted();
			if(vm.userAddForm.$valid){
				console.log(vm.userToAdd);
				UsersModel.create(vm.userToAdd).then(function(){
					$scope.$close();
				})
			}
		}
		
	});
})();
