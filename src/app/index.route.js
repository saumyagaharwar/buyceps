angular.module('buycepsApp')
.config(function($stateProvider, $urlRouterProvider) {
    console.log("Routing");

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'client/login/login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'client/register/register.html'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'client/navigation/navigation.html'
        })
      
        .state('admin', {
          url: '/admin',
          templateUrl: 'admin/admin.html'
        });
});