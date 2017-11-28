(function() {
    function User($firebaseAuth) {
        var User = {
            email: null
        };
        
            
                
        // var currentUser = "test";
        
        
        
        return User;

    }
    
    angular
        .module('donezo')
        .factory('User', ['$firebaseAuth', User]);
})();