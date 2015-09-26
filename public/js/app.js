(function(){
  'use strict';


  angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'templates/tasks.html',
          controller: 'TasksCtrl'
        })
    });
})();