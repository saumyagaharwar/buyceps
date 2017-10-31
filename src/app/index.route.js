angular.module('siplApp')
.config(function($stateProvider, $urlRouterProvider) {
    console.log("Routing");

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'register/register.html'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'navigation/navigation.html'
        });
});