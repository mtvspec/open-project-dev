(function(){
  'use strict';

  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($scope, $state, UserModel){
		// TODO 
		
		
		
		$scope.loginForm = {};
		
		$scope.user = {};
		
		$scope.logIn = function(){
			var socket = io('http://localhost:10020');
			socket.emit('login', $scope.user );
			  socket.on('logIn', function (data) {
			    console.log('User id:', data);
					if (Number(data.id) !== 0) {
						$state.go('main');
					} else {
						console.log(false);
					}
			  });
			/*
			UserModel.readUser($scope.user).then(function(){
				
			})
			*/
		}
  }
})();