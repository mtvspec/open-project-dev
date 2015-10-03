(function(){
	'use strict';

	angular.module('app')
	.controller('TasksCtrl', function(TasksModel) {

		var vm = this;

		var tasks = [];

	TasksModel.getAllTasks().then(function (tasks) {
		vm.tasks = tasks;
	});
	
	})
})();