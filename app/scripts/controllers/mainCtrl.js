'use strict';

angular.module('app')
    .controller('mainCtrl', MainCtrl);

function MainCtrl($scope) {
    $scope.message = 'Welcome to Job Search Log!';
        
    var request = indexedDB.open("JobSearchLog",5);
    var db;
    
    request.onupgradeneeded = function() {
        // The database did not previously exist, so create object stores and indexes.
        db = request.result;
        db.deleteObjectStore("activities");
        var store = db.createObjectStore("activities", {keyPath: "id", autoIncrement: true});
        var idIndex = store.createIndex("by_id", "id", {unique: true});
        var employerIndex = store.createIndex("by_employer", "employer");

    };

    request.onsuccess = function() {
        db = request.result;
    };
        
};
