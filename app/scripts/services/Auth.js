(function() {
    function Auth($firebaseAuth) {
        var Auth = {};
        
        Auth.$createUserWithEmailAndPassword(Auth.email, Auth.password)
        .then(function(firebaseUser) {
          Auth.message = "User created with uid: " + firebaseUser.uid;
        }).catch(function(error) {
          Auth.error = error;
        });
        
        return Auth;
    }
    
    angular
        .module('donezo')
        .factory('Auth', ['$firebaseAuth', Auth]);
})();