(function () {
    function NavCtrl($firebaseAuth) {
        var NavCtrl = {};
        
        NavCtrl.loggedInUser = $firebaseAuth().$getAuth();
        
        $firebaseAuth().$onAuthStateChanged(function (user) {
            NavCtrl.loggedInUser = user;
        });
        
        //debugger;
        
        return NavCtrl;
    }
    
    angular.module("donezo")
        .controller("NavCtrl", ["$firebaseAuth", NavCtrl]);
}());