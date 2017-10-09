(function() {
    function TaskCtrl(Task) {
        this.allTasks = Task.getAll();
        this.newTask = null; // the ng-model for the input of the new task
        
        this.addTask = function() {
            Task.add(this.newTask);
            this.newTask = "";
        };
        
        this.checkKey = function (event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.addTask();
            }
        };
        
        this.isExpired = function(task) {
            var currentTime = new Date().getTime();
            var seven_days = 604800000;
            if ( ((task.created_at + seven_days) - currentTime) <= 0 ) {
                task.expired = true;
            } else {
                task.expired = false;
            }
            
            return task.expired;

        }
        
        this.isCompleted = function(task) {
            return task.completed;
        }
        
        this.completeTask = function(task) {
            Task.markCompleted(task);
            // console.log("this task is now completed:", task.completed)
        }
    }
            
    angular
        .module('donezo')
        .controller('TaskCtrl', ['Task', TaskCtrl]);
})();