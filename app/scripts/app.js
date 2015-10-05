'use strict';
    
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function ($routeProvider) {
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
            templateUrl : 'views/newActivity.html',
            controller  : 'newActivityCtrl'
        })

        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutCtrl'
        })

        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller  : 'contactCtrl'
        });
});

app.controller('mainCtrl', function($scope) {
    $scope.message = 'Welcome to Job Search Log!';
        
//    var request = indexedDB.open("JobSearchLog");
//    
//    request.onupgradeneeded = function() {
//        // The database did not previously exist, so create object stores and indexes.
//        var db = request.result;
//        var store = db.createObjectStore("activities", {keyPath: "id", autoIncrement: true});
//        var idIndex = store.createIndex("by_id", "id", {unique: true});
//        var employerIndex = store.createIndex("by_employer", "employer");
//
//        // Populate with initial data.
//        store.put({
//            id: 1,
//            contactDate: "08/14/2015",
//            contactType: "employer",
//            contactMethod: "online",
//            activityType: "application",
//            position: "Sr. Software Engineer",
//            employer: "Tableau",
//            contact: "joe@example.com",
//            jobRefNumber: "12345"
//        });
//        store.put({
//            id: 2,
//            contactDate: "08/14/2015",
//            contactType: "employer",
//            contactMethod: "online",
//            activityType: "application",
//            position: "Software Engineer",
//            employer: "Google",
//            contact: "bob@example.com",
//            jobRefNumber: "BR1245"
//        });
//        store.put({
//            id: 3,
//            contactDate: "08/14/2015",
//            contactType: "employer",
//            contactMethod: "online",
//            activityType: "application",
//            position: "Software Engineer, Java",
//            employer: "Adobe",
//            contact: "tom@example.com",
//            jobRefNumber: "5432A"
//        });
//    };
//
//    request.onsuccess = function() {
//        db = request.result;
//    };
        
});




app.controller('aboutCtrl', function($scope) {
    $scope.message = 'This app is for logging your job search activities.';
});

app.controller('contactCtrl', function($scope) {
    $scope.message = 'Put contact info here eventually...';
});
