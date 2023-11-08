(function () {
  "use strict";
  angular
    .module("myFirstApp", [])
    //   controller helps to bring modification on a small part of like a div
    // $ should not be used it is only for angular given var when we declare var
    .controller("myFirstController", function ($scope) {
      $scope.name = "Urban";
    });
})();
