angular.module('siplApp')
.controller('registerController', ['$scope', '$http', function($scope, $http) {
    console.log("registerController");

    $scope.submit = function(isValid) {
        console.log($scope.user);
        if(isValid) {
            $http.post('http://localhost:8080/users', $scope.user)
            .then(function(response) {
                console.log("user created");
            }).catch(function(data, status) {
                console.log('Error: ', status, data);
            });
        }
    };
}]);