'use strict';
    
angular
    .module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])

    // configure our routes
    .config(function ($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainCtrl'
        })

        .when('/list', {
            templateUrl : 'views/activityList.html',
            controller  : 'activityListCtrl'
        })

        .when('/new', {
            templateUrl : 'views/addActivity.html',
            controller  : 'addActivityCtrl'
        })

        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutCtrl'
        })

        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contactCtrl'
        });
})
    // add controllers
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
