window.onload = function() {
    const users = {
        "user1": "password1",
        "user2": "password2"
    };

    const form = document.querySelector("#login-form");
    
    form.onsubmit = function(event) {
        event.preventDefault();

        const enteredUsername = document.querySelector("#username").value;
        const enteredPassword = document.querySelector("#password").value;

        if (validateCredentials(enteredUsername, enteredPassword)) {
            alert("Success!");
        } else {
            alert("Error!");
        }
    };

    function validateCredentials(username, password) {
        return users[username] === password;
    }
};

