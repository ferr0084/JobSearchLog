'use strict';

angular
    .module('app')
    .controller('contactCtrl', ContactCtrl);

function ContactCtrl($scope) {
    $scope.message = 'Put contact info here eventually...';
};
