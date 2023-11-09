(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);
  function MsgController($scope) {
    $scope.name = "Yaakov";
  }
})();
