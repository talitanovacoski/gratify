angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('write', {
    url: '/write',
    templateUrl: 'templates/write.html',
    controller: 'writeCtrl'
  })

  .state('saved', {
    url: '/saved',
    templateUrl: 'templates/saved.html',
    controller: 'savedCtrl'
  })

  .state('open', {
    url: '/open',
    templateUrl: 'templates/open.html',
    controller: 'openCtrl'
  })

  .state('jar', {
    url: '/jar',
    templateUrl: 'templates/jar.html',
    controller: 'jarCtrl'
  })

$urlRouterProvider.otherwise('/')

  

});