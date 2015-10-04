(function () {
	'use strict';
	
	angular.module('app')
	.controller('TaskDeleteCtrl', function ($scope, TasksModel, task) {
		var vm = this;
		var taskDeleteForm = {};
		vm.taskDeleteForm = taskDeleteForm;
		var taskToDelete = {};
		vm.taskToDelete = task;
		vm.submit = submit;
		
		function submit() {
			console.log(taskToDelete);
			TasksModel.remove(task).then(function () {
				$scope.$close();
			})
		}
	})
})();