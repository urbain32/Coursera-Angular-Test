(function () {
  // use strict helps to use strict code
  "use strict";
  angular
    .module("NameCalculator", [])
    .controller("NameCalculatorController", function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function () {
        $scope.totalNameValue = 0; // get the total value
        $scope.totalValue = totalNameValue;
      };
    });
})();
