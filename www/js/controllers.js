angular.module('starter.controllers', [])

.controller('lampeCtrl', function($scope) {
  $scope.lightSwitch =function(){
    window.plugins.flashlight.toggle(
      function() {}, // optional success callback
      function() {}, // optional error callback
    );
  }
})

.controller('vibrationCtrl', function($scope) {
  $scope.vibration=function(){
    navigator.vibrate([3000]);
  }
});