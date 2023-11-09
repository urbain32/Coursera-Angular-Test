// (function () {
//   "use strict";
//   angular.module("DIApp", []).controller("DIController", DIController);
//   DIController.$inject = ["$scope", "$filter"];
//   function DIController($scope, $filter) {
//     $scope.name = "Urban";
//     $scope.upper = function () {
//       var upCase = $filter("uppercase");
//       $scope.name = upCase($scope.name);
//     };
//   }
// })();

// this is a mifiefied javascript from the commented code
//   DIController.$inject = ["$scope", "$filter"]; we use inject here coz miify can not recognize "$scope", "$filter"

!(function () {
  "use strict";
  function e(e, n) {
    (e.name = "Urban"),
      (e.upper = function () {
        var r = n("uppercase");
        e.name = r(e.name);
      });
  }
  angular.module("DIApp", []).controller("DIController", e),
    (e.$inject = ["$scope", "$filter"]);
})();
