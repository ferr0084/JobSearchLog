'use strict';

angular
    .module('app')
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, activity) {

    $scope.activity = activity;
    
    $scope.close = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    
});
