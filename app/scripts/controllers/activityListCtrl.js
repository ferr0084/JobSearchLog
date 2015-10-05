'use strict';

angular
    .module('app')
    .controller('activityListCtrl', [ '$scope', '$http', ActivityListCtrl ]);
                
function ActivityListCtrl($scope, $http){
    
      $http.get('../../data/activities.json').success(function(data){
         $scope.activities = data; 
      }).error(function(data){
            $http.get('/app/data/activities.json').success(function(data){
                $scope.activities = data; 
            });
      });
        
//    var db = indexedDB.open("JobSearchLog").request.result;
//    var tx = db.transaction("activities", "readonly");
//    var store = tx.objectStore("activities");
//    var index = store.index("by_id");
//    $scope.activities = [];       
//
//    var request = index.openCursor();
//    request.onsuccess = function($scope) {
//        var cursor = request.result;
//        if (cursor) {
//            // Called for each matching record.
//            $scope.activities.push(cursor.value);
//    
//            report(
//                cursor.value.id, 
//                cursor.value.contactDate, 
//                cursor.value.contactType, 
//                cursor.value.contactMethod, 
//                cursor.value.activityType, 
//                cursor.value.position, 
//                cursor.value.employer, 
//                cursor.value.contact, 
//                cursor.value.jobRefNumber);
//      
//            cursor.continue();
//        } else {
//            // No more matching records.
//            report(null);
//        }
//    }
        
};