angular.module('siplApp')
.controller('loginController', [ '$scope', '$http', function($scope, $http) {
    console.log("loginController");

    $scope.submit = function(isValid) {
        console.log($scope.login);
        if(isValid) {
            $http.post('http://localhost:8080/authenticate', $scope.login)
            .then(function(response) {
                console.log("login successfull");
            }).catch(function(data, status) {
                console.log('Error: ', status, data);
            });
        }
    };
}]);