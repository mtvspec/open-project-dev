(function(){
	'use strict';
	
	angular.module('app')
	.controller('ChatCtrl', ChatCtrl);
	
	function ChatCtrl($scope) {
		
		$scope.messages = [];
		$scope.chatMessagesListFrom = {};
		
		$scope.message = {};
		
		var socket = io('http://192.168.1.222:10020');
		
		socket.on('message', function(data){
			$scope.messages.push(data);
		})
		
		$scope.sendMessage = function(message) {
			socket.emit('message', message);
			message.text = '';
			return false;
		}
		
	}
})();