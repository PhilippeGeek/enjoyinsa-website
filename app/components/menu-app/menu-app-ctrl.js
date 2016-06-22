(function(){

    angular.module('enjoyinsa').controller('MenuAppCtrl',['$scope', '$mdSidenav',function($scope, $mdSidenav){
        $scope.title = "EnjoyINSA!";
        $scope.menuIsOpen = false;
        $scope.toggleMenu = function(){
            $mdSidenav('left').toggle();
            console.log('left')
        }
    }])

})();