{
  (function () {
    "use strict";
    angular
      .module("ShoppingListCheckOff", [])
      .controller("ToBuyController", ToBuyController)
      .controller("AlreadyBoughtController", AlreadyBoughtController)
      .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

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
      service.getBuyitem = function () {
        return toBuyItems;
      };
      service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
      };
    }
  })();
}
