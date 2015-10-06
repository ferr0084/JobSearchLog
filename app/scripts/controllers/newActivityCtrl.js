'use strict';

angular
    .module('app')
    .controller('newActivityCtrl', ['$scope', '$http', NewActivityCtrl]);
                                    
function NewActivityCtrl($scope, $http) {    

    $scope.addActivity = function(){
        
        var req = indexedDB.open("JobSearchLog");
    
        req.onsuccess = function(e){
            var db = e.target.result;
            var tx = db.transaction("activities", "readwrite");
            var store = tx.objectStore("activities");

            store.put({
                contactDate: $scope.contactDate,
                activityType: $scope.activityType,
                contactType: $scope.contactType,
                contactMethod: $scope.contactMethod,
                other: $scope.other,
                employer: $scope.employer,
                position: $scope.position,
                phone: $scope.phone,
                address: $scope.address,
                city: $scope.city,
                state: $scope.state,
                contact: $scope.contact,
                website: $scope.website,
                email: $scope.email,
                jobRefNumber: $scope.jobRefNumber,
                fax: $scope.fax,
                newspaperName: $scope.newspaperName,
                publicationDate: $scope.publicationDate,
                activityDescription: $scope.activityDescription
            });
                
            tx.oncomplete = function() {
                $scope.contactDate = '';
                $scope.activityType = '';
                $scope.contactType = '';
                $scope.contactMethod = '';
                $scope.other = '';
                $scope.employer = '';
                $scope.position = '';
                $scope.phone = '';
                $scope.address = '';
                $scope.city = '';
                $scope.state = '';
                $scope.contact = '';
                $scope.website = '';
                $scope.email = '';
                $scope.jobRefNumber = '';
                $scope.fax = '';
                $scope.newspaperName = '';
                $scope.publicationDate = '';
                $scope.activityDescription = '';
                $scope.addActivityForm.$setPristine();
            };
            
        };    
    };
};
