(function () {
  var app = angular.module("customersApp", ["ngRoute", "ngAnimate"]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "CustomersController",
        templateUrl: "app/views/customers.html",
      })
      .when("/orders/:customerId", {
        controller: "OrdersController",
        templateUrl: "app/views/orders.html",
      })
      .when("/iframeTut", {
        controller: "IframeController",
        templateUrl: "app/views/IframeForYoutube.html",
      })
      .when("/orders", {
        controller: "AllOrdersController",
        templateUrl: "app/views/allorders.html",
      })
      .otherwise({ redirectTo: "/" });
  });
})();
