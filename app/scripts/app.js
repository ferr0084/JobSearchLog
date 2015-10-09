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
});
