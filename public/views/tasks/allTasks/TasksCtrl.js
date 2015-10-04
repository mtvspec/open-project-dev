(function(){
	'use strict';

	angular.module('app')
	.controller('TasksCtrl', function ($modal, TasksModel, UserModel) {

	var vm = this;
	
	var user = UserModel.getUser();

	var tasks = [];
	tasks = tasks;

	TasksModel.getAllTasks(user).then(function (tasks) {
		vm.tasks = tasks;
	}, function (error) {
		console.log(error);
	});

	var addTask = function () {
		$modal.open({
			templateUrl: 'views/tasks/addTask/TaskAddTmpl.html',
			controller: 'TaskAddCtrl',
			controllerAs: 'vm',
			size: 'md'
		})
	}
	vm.addTask = addTask;

	var editTask = function (taskToEdit) {
		$modal.open({
			templateUrl: 'views/tasks/editTask/TaskEditTmpl.html',
			controller: 'TaskEditCtrl',
			controllerAs: 'vm',
			size: 'md',
			resolve: {
				originalTask: function () {
					return taskToEdit;
				}
			}
		})
	}
	vm.editTask = editTask;
	
	var deleteTask = function (taskToDelete) {
		console.log(taskToDelete);
		$modal.open({
			templateUrl: 'views/tasks/deleteTask/TaskDeleteTmpl.html',
			controller: 'TaskDeleteCtrl',
			controllerAs: 'vm',
			size: 'md',
			resolve: {
				task: function () {
					return taskToDelete;
				}
			}
		})
	}
	vm.deleteTask = deleteTask;
	
	})
})();
