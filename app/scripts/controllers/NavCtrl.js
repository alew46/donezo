(function () {
    function NavCtrl($firebaseAuth) {
        var NavCtrl = {};
        
        NavCtrl.loggedInUser = $firebaseAuth().$getAuth();
        
        $firebaseAuth().$onAuthStateChanged(function (user) {
            NavCtrl.loggedInUser = user;
        });
        
        //debugger;
        
        return NavCtrl;
        
        this.testFunction = function() {
            console.log("logUserOut in NavCtrl is firing")
        }
        
    }
    
    angular.module("donezo")
        .controller("NavCtrl", ["$firebaseAuth", NavCtrl]);
}());