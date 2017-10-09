(function() {
    function Task($firebaseArray) {
        var Task = {}
                
        var ref = firebase.database().ref().child("tasks");
        
        Task.getAll = function () {
             return $firebaseArray(ref);
        };
        
        var tasks = $firebaseArray(ref);
        
        Task.all = tasks;
        
        Task.add = function(task) {
            console.log(">>>>>>", task)
            tasks.$add({
                taskName: task,
                expired: false,
                completed: false,
                created_at: firebase.database.ServerValue.TIMESTAMP
            });
        };
        
        Task.markCompleted = function(task) {
            ref.child(task.$id).update({completed: true});    
        }
        
//        Task.isExpired = function(task) {
//            return task.expired;
//        }
        
        //set isExpired to the expired property of the task
        //in view set ng-hide="isExpired"
        
        return Task;
        
    }
    
    angular
        .module('donezo')
        .factory('Task', ['$firebaseArray', Task]);
})();