(function() {
    function User($firebaseUser) {
        var User = {};
                
        var firebaseUser = $firebaseUser();
                
        var currentUser = firebaseUser.getInstance().getCurrentUser();
        
        if (currentUser != null) {
            // Name, email address, and profile photo Url
            var email = currentUser.getEmail();
            return email;
        }
        
        return User;

    }
    
    angular
        .module('donezo')
        .factory('User', ['$firebaseUser', User]);
})();