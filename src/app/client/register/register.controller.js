angular.module('buycepsApp')
.controller('registerController', ['$scope', '$http', function($scope, $http) {
    console.log("registerController");

    $scope.submit = function(isValid) {
        console.log($scope.user);
        if(isValid) {
            $http.post('http://localhost:8080/api/users', $scope.user)
            .then(function(response) {
                console.log("user created");
                $scope.successMsg = "Registration Successfull !";
                $scope.registerSuccess = true;
            }).catch(function(response) {
               console.log('Error: ', response);
                $scope.failedMessage = response.data;
                $scope.registerFailed = true;
            });
        }
    };
}]);