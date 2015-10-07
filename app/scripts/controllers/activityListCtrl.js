'use strict';

angular
    .module('app')
    .controller('activityListCtrl', [ '$scope', '$http', ActivityListCtrl ]);
                
function ActivityListCtrl($scope, $http){

    $scope.activities = [];
    var req = indexedDB.open("JobSearchLog");
    
    req.onsuccess = function(e){
        var db = e.target.result;
        var tx = db.transaction("activities", "readonly");
        var store = tx.objectStore("activities");
        var index = store.index("by_id");
        var request = index.openCursor();
        request.onsuccess = function(e) {
            var cursor = e.target.result;
            if (cursor) {
                // Called for each matching record.
                $scope.activities.push(cursor.value);
                cursor.continue();
            } 
        }
    };

    $scope.openActivity = function(id){
        window.alert("clicked open " + id);
    };

    $scope.editActivity = function(id){
        window.alert("clicked edit " + id);
    };

    $scope.deleteActivity = function(id){
        var req = indexedDB.open("JobSearchLog");
    
        req.onsuccess = function(e){
            var db = e.target.result;
            var tx = db.transaction("activities", "readwrite");
            var store = tx.objectStore("activities");
            var index = store.index("by_id");

            var request = index.get(id);
            request.onsuccess = function() {
                var matching = request.result;
                if (matching !== undefined) {
                    // A match was found.
                    store.delete(id);
                } else {
                    // No match was found.
                    alert('no record with id ' + id + ' found');
                }
            };
        };

    };
    
};