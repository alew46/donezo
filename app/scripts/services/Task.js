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
            tasks.$add(task);
        };
        
        return Task;
        
    }
    
    angular
        .module('donezo')
        .factory('Task', ['$firebaseArray', Task]);
})();