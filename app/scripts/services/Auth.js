(function() {
    function Auth($firebaseAuth) {
        var Auth = {};
        
        Auth.$createUserWithEmailAndPassword(email, password)
                .then(function(firebaseUser) {
                  this.message = "User created with uid: " + firebaseUser.uid;
                }).catch(function(error) {
                  this.error = error;
                });
        
        return Auth;
    }
    
    angular
        .module('donezo')
        .factory('Auth', ['$firebaseAuth', Auth]);
})();