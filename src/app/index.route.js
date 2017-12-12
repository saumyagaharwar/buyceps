angular.module('buycepsApp')
.config(function($stateProvider, $urlRouterProvider) {
    console.log("Routing");

    $urlRouterProvider.otherwise('/app');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'client/login/login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'client/register/register.html'
        })

        .state('app', {
            url: '/app',
            templateUrl: 'client/navigation/navigation.html'
        })
        
        .state('app.home', {
            resolve: { productPage : function() { return true } },
            url: '/home',
            templateUrl: 'client/home/home.html'
        })
      
       .state('app.product', {
            url: '/product',
            templateUrl: 'client/product/product.html'
        })
      
        .state('admin', {
          url: '/admin',
          templateUrl: 'admin/admin.html'
        });
});