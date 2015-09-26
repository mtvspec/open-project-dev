(function(){
  'use strict';


  angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl'
        })
        .state('main', {
          url: '/',
          templateUrl: 'templates/tasks.html',
          controller: 'TasksCtrl'
        })
    });
})();