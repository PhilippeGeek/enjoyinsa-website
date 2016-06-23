'use strict';

var remote_server = remote_server || "http://localhost:3000";

angular.module('enjoyinsa.events', ['ngRoute', 'ngMaterial','ngMessages'])

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
    .controller('EventsNewCtrl', function ($scope, $http, $mdDialog) {
        $scope.event = {title:"",organizator:"",description:""};
        $scope.$errors = {};
        $scope.send = function(event){
            $http.post(remote_server+'/events', {event:$scope.event}).then(function (result) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Confirmation')
                        .textContent('Votre proposition d\'évènement est enregistré, vous serez informé lors de sa publication.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Ok')
                );
            },function(result){
                $scope.$errors = {};
                angular.forEach(result.data,function(errors,field){
                    $scope.$errors[field] = [];
                    angular.forEach(errors,function (error) {
                        $scope.$errors[field] = error.error
                    })
                });
                console.log($scope.$errors);
            });
            if(event!=undefined)
                event.preventDefault();
            return false;
        }
    })
    .config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });;