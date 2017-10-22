(function() {
    function AuthCtrl(Auth) {
        
        this.createUser = function() {
            console.log("controller createUser is firing")
            
            this.message = null;
            this.error = null;
        
            Auth.$createUserWithEmailAndPassword(this.email, this.password);
            
        }
        

        
    }
            
    angular
        .module('donezo')
        .controller('AuthCtrl', ['Auth', AuthCtrl]);
})();