(function () {
	'use strict';
	
	angular.module('app')
	.controller('TaskEditCtrl', function($scope, originalTask, TasksModel){
		
		var vm = this;
		
		var taskEditForm = {};
		vm.taskEditForm = taskEditForm;
		
		vm.hasError = hasError;
		function hasError(fieldName) {
			var field = vm.taskEditForm[fieldName];
			if (field) {
				return field.$invalid && (vm.taskEditForm.$submitted || !field.$pristine);
			}
		}
		
		var taskToEdit = angular.copy(originalTask);
		
		vm.taskToEdit = taskToEdit;
		
		vm.submit = submit;
		
		function submit () {
			vm.taskEditForm.$setSubmitted();
			if (vm.taskEditForm.$valid) {
				console.log(vm.taskToEdit);
				TasksModel.save(vm.taskToEdit).then(function () {
					$scope.$close();
				})
			}
		}
		
	})
})();