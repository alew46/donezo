(function() {
    function AuthCtrl(Auth, User) {
        
        this.createUser = function() {
            console.log("controller createUser is firing")
            
            this.message = null;
            this.error = null;
        
            Auth.createUserWithEmailAndPassword(this.email, this.password).then(function (message) {
                console.log("Success", message);
                window.location = 'tasks';
            }).catch(function (error) {
                console.log("We got an error", error);
            });
            
        }
        
        this.signInUser = function () {
            
            this.message = null;
            this.error = null;
            
            Auth.signInWithEmailAndPassword(this.newEmail, this.newPassword);
            
        }
        
        
    }
            
    angular
        .module('donezo')
        .controller('AuthCtrl', ['Auth', 'User', AuthCtrl]);
})();