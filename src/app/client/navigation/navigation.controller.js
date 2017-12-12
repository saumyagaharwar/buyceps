angular.module('buycepsApp')
.controller('navigationController', [ '$scope', '$http','$state', function($scope, $http, $state) {
  $scope.currentApp = $state.current;
  $scope.thisApp = 'app';
  $scope.navigation = true; // default visibility state

        $scope.showNavigation = function(show) {
            $scope.navigation = show;
        };
  }]);