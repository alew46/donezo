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
    }
            
    angular
        .module('donezo')
        .controller('TaskCtrl', ['Task', TaskCtrl]);
})();