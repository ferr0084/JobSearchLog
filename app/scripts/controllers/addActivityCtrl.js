'use strict';

angular
    .module('app')
    .controller('addActivityCtrl', ['$scope', '$http', AddActivityCtrl]);
                                    
function AddActivityCtrl($scope, $http) {    

    $scope.addActivity = function(){
        
        var req = indexedDB.open("JobSearchLog");
    
        req.onsuccess = function(e){
            var db = e.target.result;
            var tx = db.transaction("activities", "readwrite");
            var store = tx.objectStore("activities");

            store.put($scope.activity);
            
            tx.oncomplete = function() {
                $scope.activity = null;
//                $scope.activity.contactDate = '';
//                $scope.activity.activityType = '';
//                $scope.activity.contactType = '';
//                $scope.activity.contactMethod = '';
//                $scope.activity.other = '';
//                $scope.activity.employer = '';
//                $scope.activity.position = '';
//                $scope.activity.phone = '';
//                $scope.activity.address = '';
//                $scope.activity.city = '';
//                $scope.activity.state = '';
//                $scope.activity.contact = '';
//                $scope.activity.website = '';
//                $scope.activity.email = '';
//                $scope.activity.jobRefNumber = '';
//                $scope.activity.fax = '';
//                $scope.activity.newspaperName = '';
//                $scope.activity.publicationDate = '';
//                $scope.activity.activityDescription = '';
                $scope.addActivityForm.$setPristine();
                $scope.$apply();
            };
            
        };    
    };
    
};
