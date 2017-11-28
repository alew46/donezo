(function() {
    function Task($firebaseArray, $firebaseAuth) {
        var Task = {}
                        
        var ref = firebase.database().ref().child("tasks");
        
        Task.getAll = function () {
             return $firebaseArray(ref);
        };
        
        Task.getUserTasks = function() {
             return firebase.database().ref().child("tasks").orderByChild("user_id").equalTo(firebase.auth().currentUser.uid);
        };
        
        //var tasks = firebase.database().ref().child("tasks").orderByChild("user_id").equalTo(firebase.auth().currentUser.uid);
        
        var tasks = $firebaseArray(ref);
        
        Task.all = tasks;
        
        Task.add = function(task) {
                    var auth = $firebaseAuth();

            
            console.log(">>>>>>", task)
            tasks.$add({
                taskName: task,
                expired: false,
                completed: false,
                created_at: firebase.database.ServerValue.TIMESTAMP,
                user_id: firebase.auth().currentUser.uid
            });
        };
        
        Task.markCompleted = function(task) {
            ref.child(task.$id).update({completed: true});    
        }
        
        Task.deleteFromBase = function(task) {
            ref.child(task.$id).remove();
        }
        
        Task.setNewTimestamp = function(task) {
            ref.child(task.$id).update({created_at: firebase.database.ServerValue.TIMESTAMP});    
        }
        
        Task.getCurrentUserId = function() {
            return firebase.auth().currentUser.uid;
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
        .factory('Task', ['$firebaseArray', '$firebaseAuth', Task]);
})();