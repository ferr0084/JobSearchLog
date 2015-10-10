'use strict';

angular
    .module('app')
    .controller('editActivityCtrl',  EditActivityCtrl);
                
function EditActivityCtrl($scope, $modalInstance, activity) {

    $scope.activity = activity;
    
    $scope.editActivity = function(){
        
        var req = indexedDB.open("JobSearchLog");
    
        req.onsuccess = function(e){
            var db = e.target.result;
            var tx = db.transaction("activities", "readwrite");
            var store = tx.objectStore("activities");            
            store.put($scope.activity);
            $modalInstance.close();
            $scope.apply();
        };
    };
    
    $scope.close = function () {
        $modalInstance.close();
    };

};
