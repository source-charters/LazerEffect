// WAITING FOR DOM TO LOAD
document.addEventListener("DOMContentLoaded", function () {
    var contactform = document.getElementById("contactform");
    var message = document.getElementById("formMessage");

    if (contactform) {
        contactform.addEventListener("submit", function (e) {
            e.preventDefault();                                         // PREVENTS PAGE RELOAD

            var name = document.getElementById("contactname").value.trim();
            var email = document.getElementById("contactemail").value.trim();
            var Cmessage = document.getElementById("contactmessage").value.trim();

            message.style.color = "red";

            // VALIDATION TO CHECK IF FIELDS ARE BLANK
            if (name === "" || email === "" || Cmessage === "") {
                message.textContent = "Please fill in all fields.";
                return;
            }
            else
                // VALIDATING NAME : LETTERS AND SPACES ONLY
                if (!validateName(name)) {
                    message.textContent = "Please enter a valid name (letters and spaces only).";
                    return;
                }
                else
                    // VALIDATING EMAIL
                    if (!validateEmail(email)) {
                        message.textContent = "Please enter a valid email address.";
                        return;
                    }

            // IF ALL FIELDS ARE VALID
            message.style.color = "silver";
            message.textContent = "Form submitted successfully!";
            contactform.reset(); // CLEARS THE FORM

            // MAKES TEXT DISAPPEAR AFTER 1,5 SECONDS
            setTimeout(() => {
                message.textContent = "";
            }, 1500);
        });
    }


    // INDEX PAGE : 'JOIN THE MOVEMENT' EMAIL SUBMIT
    var signupform = document.getElementById("signupform");
    var signupMessage = document.getElementById("signupMessage");

    if (signupform) {
        signupform.addEventListener("submit", function (e) {
            e.preventDefault();

            var signupEmail = document.getElementById("signupemail").value.trim();

            signupMessage.style.color = "red";

            // VALIDATION CHECK: CHECK EMAIL FIELD IS BLANK
            if (signupEmail === "") {
                signupMessage.textContent = "Please enter a valid email address.";
                return;
            }
            // VALIDATING EMAIL
            else if (!validateSignEmail(signupEmail)) {
                signupMessage.textContent = "Please enter a valid email address (format).";
                return;
            }

            // IF ALL FIELDS ARE VALID
            signupMessage.style.color = "silver";
            signupMessage.textContent = "Form submitted successfully!";
            signupform.reset(); // CLEARS THE FORM

            // MAKES TEXT DISAPPEAR AFTER 1,5 SECONDS
            setTimeout(() => {
                signupMessage.textContent = "";
            }, 1500);

        });
    }


    // FUNCTION TO VALIDATE THE EMAIL FORMAT
    function validateSignEmail(signupEmail) {
        var re2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re2.test(signupEmail);
    }

    // FUNCTION TO VALIDATE THE EMAIL FORMAT
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // FUNCTION TO VALIDATE THE NAME : LETTERS AND SPACES ONLY
    function validateName(name) {
        var re = /^[A-Za-z\s]+$/;
        return re.test(name);
    }


});



