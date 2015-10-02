var myApp = angular.module('myApp', ['ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap']);
myApp.controller('mainController',function($scope){
    $scope.message="Amar";
    
    $scope.count=10;
    $scope.listProvider = function(count){
        list = [];
        for(i=0;i<count;i++){
            list[i]=i+1;
        }
        return list;
    };
});
