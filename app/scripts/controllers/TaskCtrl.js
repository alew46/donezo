(function() {
    function TaskCtrl(Task, Auth) {
        // an event you can hook up to for logged in user state 
        // it's on firebaseAuth
        Auth.onAuthStateChanged(function () {
            console.log("It changed");
            this.allTasks = Task.getUserTasks();
            window.allTasks = this.allTasks;
        }.bind(this));
        
        this.allTasks = Task.getUserTasks();       
        
        // this.userTasks = Task.getUserTasks();
        this.newTask = null; // the ng-model for the input of the new task
        
        this.addTask = function() {
            Task.add(this.newTask.task, this.newTask.description);
            this.newTask.task = "";
            this.newTask.description = "";
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
        
        this.completeTask = function(task, event) {
            event.stopPropagation();
            Task.markCompleted(task);
            // console.log("this task is now completed:", task.completed)
        }
        
        this.deleteTask = function(task) {
            Task.deleteFromBase(task);
        }
        
        this.reactivateTask = function(task) {
            Task.setNewTimestamp(task);
        }
        
        this.currentUserId = function() {
            return Task.getCurrentUserId;
        }
    }
    
    $('.task-name').click(function(){
       var $dsctray = $('.task-description');
        $dsctray.animate({
          top: 0
        });
    });
    
    angular
        .module('donezo')
        .controller('TaskCtrl', ['Task', 'Auth', TaskCtrl]);
})();