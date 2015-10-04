(function(){
	'use strict';

	angular.module('app', ['ui.router', 'ui.bootstrap'])
	.run(function ($rootScope) {
		$rootScope.$on('$stateChangeSuccess', function (evt, toState) {
			if (toState.data && toState.data.title) {
				$rootScope.APP_TITLE = toState.data.title;
			}
			else {
				throw new Error('No title specified in state "' + toState.name + '"');
			}
		});
	})
	.config(function($stateProvider, $urlRouterProvider) {
		
		var user = {};
		
		function authentificate($state, UserModel) {
			UserModel.getUser().then(function () {
				user = data;
				if (!user.id) {
					$state.go('login');
				}
			});
		};
		
		

	$urlRouterProvider.otherwise('/login');

	$stateProvider

	.state('login', {
		url: '/login',
		templateUrl: 'views/login/login.html',
		controller: 'LoginCtrl',
		controllerAs: 'vm',
		data: {
			title: 'Login'
		}
	})
	
	.state('main', {
		abstract: true,
		templateUrl: 'views/root.html'
	})
	
	.state('main.layout' , {
		views: {
			header: {
				templateUrl: 'views/main/header.html'
			},
			content: {
				templateUrl: 'views/main/content.html'
			}
		},
		data: {
			title: 'Main'
		}
	})

	.state('main.layout.tasks', {
		url: '/tasks',
		templateUrl: 'views/tasks/allTasks/TasksTmpl.html',
		controller: 'TasksCtrl',
		controllerAs: 'vm',
		data: {
			title: 'Tasks'
		}
	})
	
	.state('admin', {
		abstract: true,
		templateUrl: 'views/root.html'
	})
	
	.state('admin.layout', {
		views: {
			header: {
				templateUrl: 'views/admin/header.html'
			},
			content: {
				templateUrl: 'views/admin/content.html'
			}
		},
		data: {
			title: 'Admin'
		}
	})
	
	.state('admin.layout.users', {
		url: '/users',
		templateUrl: 'views/admin/users/allUsers/allUsers.html',
		controller: 'UsersListCtrl',
		controllerAs: 'vm',
		data: {
			title: 'Users'
		}
	})

	});

})();