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
                $scope.addActivityForm.$setPristine();
                $scope.$apply();
            };
            
        };    
    };
    
};
