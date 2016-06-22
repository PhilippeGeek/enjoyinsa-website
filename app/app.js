'use strict';

// Declare app level module which depends on views, and components
angular.module('enjoyinsa', [
  'ngRoute',
    'ngMaterial',
  'enjoyinsa.view1',
  'enjoyinsa.events',
  'enjoyinsa.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('mdi.svg')
});