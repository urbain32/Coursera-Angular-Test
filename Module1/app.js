(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", function ($scope) {
      $scope.checkLunch = function () {
        if (!$scope.items) {
          $scope.message = "Please enter data first!";
          return;
        }

        var items = $scope.items.split(",");
        var numItems = items.length;

        if (numItems <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      };
    });
})();
