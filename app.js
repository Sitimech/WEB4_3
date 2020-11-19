(function() {
'use strict';

angular.module('app', [])

.controller('AppController', function ($scope) {
    $scope.product = "";
    $scope.result = "";

    $scope.calc = function(){
        var Array = "," + $scope.product + ",";
        var Split = Array.split(/,[\s,]*/);
        
        Split.pop();
        Split.shift();

        if(Split.length == 0){
            $scope.result = "Будь ласка, уведіть дані!";
        }
        else if(Split.length <= 3){
            $scope.result = "На здоров'я!";
        }
        else{
            $scope.result = "Це забагато!";
        }
    };
});
})();