angular.module('buycepsApp')
.controller('loginController', [ '$scope', '$http','$state', function($scope, $http, $state) {
    console.log("loginController");

    $scope.submit = function(isValid) {
        console.log($scope.login);
        if(isValid) {
            $http.post('http://port-8080.buyceps-abhikrsingh05446337.codeanyapp.com/api/authenticate', $scope.login)
            .then(function(response) {
                console.log("login successfull");
                if(response.data.isAdmin) {
                  $state.go('admin');
                } else {
                  $state.go('app.home');  
                }
            }).catch(function(data, status) {
                console.log('Error: ', status, data);
                $scope.errorMessage = "Invalid email or password !"
                $scope.loginFailed = true;
            });
        }
    };
}]);