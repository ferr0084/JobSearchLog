'use strict';
    
angular
    .module('app', ['ngRoute'])

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
    .controller('mainCtrl', MainCtrl)
    .controller('aboutCtrl', AboutCtrl )
    .controller('contactCtrl', ContactCtrl);


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

        // Populate with initial data.
        store.put({
            contactDate: Date.now(),
            contactType: "application",
            contactMethod: "online",
            activityType: "employer",
            position: "Sr. Software Engineer",
            employer: "Tableau",
            email: "joe@example.com",
            jobRefNumber: "12345"
        });
        store.put({
            contactDate: Date.now(),
            contactType: "application",
            contactMethod: "online",
            activityType: "employer",
            position: "Software Engineer",
            employer: "Google",
            email: "bob@example.com",
            jobRefNumber: "BR1245"
        });
        store.put({
            contactDate: Date.now(),
            contactType: "application",
            contactMethod: "online",
            activityType: "employer",
            position: "Software Engineer, Java",
            employer: "Adobe",
            email: "tom@example.com",
            jobRefNumber: "5432A"
        });
    };

    request.onsuccess = function() {
        db = request.result;
    };
        
};


function AboutCtrl($scope) {
    $scope.message = 'This app is for logging your job search activities.';
};


function ContactCtrl($scope) {
    $scope.message = 'Put contact info here eventually...';
};
