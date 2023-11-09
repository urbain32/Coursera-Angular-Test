(function () {
  "use strict";
  angular.module("DIApp", []).controller("DIController", DIController);
  function DIController($scope, $filter) {
    $scope.name = "Urban";
    $scope.upper = function () {
      var upCase = $scope.filter("uppercase");
    };
  }
})();
