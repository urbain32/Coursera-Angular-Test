(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);
  MsgController.$inject = ["$scope"];
  function MsgController($scope) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "Hungry";
    $scope.sayMessage = function () {
      return "Yaakov likes to eat healthy snacks!";
    };
  }
})();
