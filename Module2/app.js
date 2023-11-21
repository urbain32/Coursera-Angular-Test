(function () {
  "use strict";
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  // creating the function for ToBuyController
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this; // creating the function for AlreadyBoughtController
    toBuyList.items = ShoppingListCheckOffService.getToBuyitems();
    toBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }
  // creating the function for AlreadyBoughtController
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;
    alreadyBoughtList.items =
      ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  // creating our function service which is a singleton
  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      { name: "papayi", quantity: 10 },
      { name: "cokes", quantity: 2 },
      { name: "Inzoga", quantity: 6 },
      { name: "apples", quantity: 4 },
      { name: "bananas", quantity: 7 },
    ];
    var alreadyBoughtItems = [];
    service.buyItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];
      alreadyBoughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };
    service.getToBuyitems = function () {
      return toBuyItems;
    };
    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    };
  }
})();
