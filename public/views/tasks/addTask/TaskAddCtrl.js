(function(){
	'use strict';
	
	angular.module('app')
	.controller('TaskAddCtrl', function ($scope, TasksModel) {
		
		var vm = this;

		var taskAddForm = {};

		vm.taskAddForm = taskAddForm;

		var taskToAdd = {};

		vm.taskToAdd = taskToAdd;

		hasError = hasError;
		vm.submit = submit;

		function hasError(fieldName){
			var field = taskAddForm[fieldName];
			if(field){
				return field.$invalid && (taskAddForm.$submitted || !field.$pristine);
			}
		}

		function submit(){
			
			vm.taskAddForm.$setSubmitted();
			if(vm.taskAddForm.$valid){
				console.log(vm.taskToAdd);
				TasksModel.create(vm.taskToAdd).then(function(response){
					$scope.$close();
				})
			}
		}
		
	});
})();