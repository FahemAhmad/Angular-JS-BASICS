(function () {
  var iframeController = function ($scope, $sce) {
    $scope.link = "";

    function init() {
      $scope.link = $sce.trustAsResourceUrl("");
    }

    init();

    $scope.updateURL = function (url, youtube) {
      console.log("Update URL Called");
      let id = url;
      console.log("y", youtube);
      if (youtube) {
        function getId(url) {
          const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);

          return match && match[2].length === 11 ? match[2] : null;
        }

        id = getId(url);

        id = "//www.youtube.com/embed/" + id;
      }

      $scope.link = $sce.trustAsResourceUrl(id);
    };
  };

  iframeController.$inject = ["$scope", "$sce"];

  angular
    .module("customersApp")
    .controller("IframeController", iframeController);
})();
