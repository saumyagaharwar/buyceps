angular.module('siplApp')
.controller('loginController', [ '$scope', '$http','$state', function($scope, $http, $state) {
    console.log("loginController");

    $scope.submit = function(isValid) {
        console.log($scope.login);
        if(isValid) {
            $http.post('http://localhost:8080/api/authenticate', $scope.login)
            .then(function(response) {
                console.log("login successfull");
                if(response.data.isAdmin) {
                  $state.go('admin');
                } else {
                  $state.go('home');  
                }
            }).catch(function(data, status) {
                console.log('Error: ', status, data);
                $scope.errorMessage = "Invalid email or password !"
                $scope.loginFailed = true;
            });
        }
    };
}]);