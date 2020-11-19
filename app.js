(function() {
'use strict';

angular.module('app', [])

.controller('AppController', function ($scope) {
    $scope.product = "";
    $scope.result = "";

    $scope.calc = function(){
        var Array = "," + $scope.product + ",";
        var SplitArray = Array.split(/,[\s,]*/);
        
        SplitArray.pop();
        SplitArray.shift();

        if(SplitArray.length == 0){
            $scope.result = "Будь ласка, уведіть дані!";
        }
        else if(SplitArray.length <= 3){
            $scope.result = "На здоров'я!";
        }
        else{
            $scope.result = "Це забагато!";
        }
    };
});
})();