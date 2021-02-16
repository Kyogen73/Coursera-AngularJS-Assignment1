(function () {
    'use strict';

    angular.module('AngularApp', [])
    .controller('AngularController', AngularController);    

    AngularController.$inject = ['$scope'];
    function AngularController($scope){
        $scope.text="";
        $scope.message="";
        $scope.statusClass="";

        $scope.checkDishes = function () {            

            let dishes = $scope.text.split(',');
            console.log($scope.text);
            console.log(dishes);
            console.log(dishes.length);

            if(dishes[0] == ""){
                $scope.message="Please enter data first";
                $scope.statusClass="red";
            }
            else if(dishes.length <= 3){
                $scope.message="Enjoy!";
                $scope.statusClass="green";                
            }
            else if(dishes.length > 3){
                $scope.message="Too much!";
                $scope.statusClass="green";
            }


            
        };

    };
})();