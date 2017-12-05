(function() {
    function Auth($firebaseAuth) {
        var Auth = {};
        var auth = $firebaseAuth();
                
        Auth.createUserWithEmailAndPassword = function (email, password) {
            return auth.$createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                console.log(">>>>>>>", auth.$getAuth());
                
              return "User created with uid: " + firebaseUser.uid;
            }).catch(function(error) {
              throw error;
            });
        };
        
        Auth.signInWithEmailAndPassword = function (newEmail, newPassword) {
            return firebase.auth().signInWithEmailAndPassword(newEmail, newPassword).then( function() {
                window.location="tasks"})
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
});
        }
        
        console.log(">>>>>>>>AUTH:", auth);
        
        Auth.onAuthStateChanged = function (fn) {
            console.log("Auth.onStateChange called successfully", fn);
         // is this the right function name?
          auth.$onAuthStateChanged(fn);  
        };
        
        Auth.logUserOut = function() {
            firebase.auth().signOut().then(function() {
                window.location="signin"
            });
        };
        
        return Auth;

    }
    
    angular
        .module('donezo')
        .factory('Auth', ['$firebaseAuth', Auth]);
})();