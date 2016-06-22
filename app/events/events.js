'use strict';

var remote_server = remote_server || "http://localhost:3000";

angular.module('enjoyinsa.events', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/events', {
            templateUrl: 'events/events.html',
            controller: 'EventsCtrl'
        });
        $routeProvider.when('/events/new', {
            templateUrl: 'events/new.html',
            controller: 'EventsNewCtrl'
        });
    }])

    .controller('EventsCtrl', function ($scope, $http) {
        $scope.events = [];
        $http.get(remote_server+'/events').then(function(data){
            console.log(data)
        });
        $scope.addNew=function(){
           window.location.href = "#!/events/new"
        }
    })
    .controller('EventsNewCtrl', function ($scope) {
        $scope.event = {
            organizator: "",
            organizator_email: ""
        }
    })
    .config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });;