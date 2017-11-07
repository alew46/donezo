(function() {
    function Auth($firebaseAuth) {
        var Auth = {};
        var auth = $firebaseAuth();
                
        Auth.createUserWithEmailAndPassword = function (email, password) {
            return auth.$createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
              return "User created with uid: " + firebaseUser.uid;
            }).catch(function(error) {
              throw error;
            });
        };
                
        
        return Auth;

    }
    
    angular
        .module('donezo')
        .factory('Auth', ['$firebaseAuth', Auth]);
})();