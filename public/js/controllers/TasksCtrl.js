(function(){
  'use strict';

  angular.module('app')
    .controller('TasksCtrl', function($scope, TasksModel) {
      TasksModel.getAllTasks().then(function (tasks) {
        $scope.tasks = tasks;
      });
    })
})();