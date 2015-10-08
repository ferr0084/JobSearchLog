'use strict';

angular
    .module('app')
    .controller('activityListCtrl', [ '$scope', '$modal', ActivityListCtrl ]);
                
function ActivityListCtrl($scope, $modal){
    
    $scope.loadActivities = function(){
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
                    $scope.$apply();
                    cursor.continue();
                } 
            }
        };
    };
    
    $scope.loadActivities();
    
    $scope.openActivity = function(id){
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../../views/modalDetail.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                'activity': function() { 
                    for(var i = 0;i<$scope.activities.length;i++){
                        if($scope.activities[i].id == id){
                            return $scope.activities[i];         
                        }
                    }
                }
            }
        });
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
                    removeActivity(id, $scope.activities);
                    $scope.$apply();
                } else {
                    // No match was found.
                    alert('no record with id ' + id + ' found');
                }
            };
        };

    };
    
    var removeActivity = function(id, array){
        for(var i = 0; i < array.length; i++){
            if(array[i].id == id){
                array.splice(i, 1);   
            }
        }
    };
    
    $scope.ok = function () {
        $scope.$parent.close();
    };

    $scope.cancel = function () {
        $scope.$parent.dismiss('cancel');
    };
};
