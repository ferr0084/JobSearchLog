'use strict';

angular
    .module('app')
    .controller('viewActivityCtrl',  ViewActivityCtrl);
                
function ViewActivityCtrl($scope, $modalInstance, activity) {

    $scope.activity = activity;
    
    $scope.close = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    
};
