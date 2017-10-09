 (function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
            .state('task', {
                 url: '/tasks',
                 controller: 'TaskCtrl as tasks',
                 templateUrl: '/templates/tasks.html'
            })
         
            .state('expired', {
                 url: '/expiredtasks',
                 controller: 'TaskCtrl as tasks',
                 templateUrl: '/templates/expiredtasks.html'
            })
         
            .state('completed', {
                 url: '/completedtasks',
                 controller: 'TaskCtrl as tasks',
                 templateUrl: '/templates/completedtasks.html'
            })
     }
     
     angular
         .module('donezo', ['ui.router', 'firebase'])
         .config(config);
 })();