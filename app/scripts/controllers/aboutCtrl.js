'use strict';

angular
    .module('app')
    .controller('aboutCtrl', AboutCtrl);

function AboutCtrl($scope) {
    $scope.message = 'This app is for logging your job search activities.';
};

