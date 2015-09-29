(function(){
	'use strict';
	
	angular.module('app')
	.factory('ChatModel', ChatModel);
	
	function ChatModel($http){
		return {
			readMessages: function() {
				return $http({
					method: 'GET',
					url: '/api/messages',
				}).then(function(response){
					$scope.messages = response.data;
				})
			}
		}
	}
})();