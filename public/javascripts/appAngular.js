angular.module('appAngular', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/loginIndex.html',
                controller: 'loginController'
            });
            /*.state('otherRoute', {
                url: '/otherRoute',
                templateUrl: 'templates/otherRoute.html',
                controller: 'otherRouteController.html'
            });*/

        $urlRouterProvider.otherwise('login');
    })
    
    
    
