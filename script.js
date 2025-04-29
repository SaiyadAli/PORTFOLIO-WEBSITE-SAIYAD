$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            myname: {
                required: true,
                minlength: 3
            },
            myphone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            myemail: {
                required: true,
                email: true
            },
            mymessage: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            myname: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 characters long"
            },
            myphone: {
                required: "Please enter your phone number",
                digits: "Please enter only digits",
                minlength: "Your phone number must be 10 digits long",
                maxlength: "Your phone number must be 10 digits long"
            },
            myemail: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            mymessage: {
                required: "Please enter your message",
                minlength: "Your message must be at least 10 characters long"
            }
        },
        submitHandler: function (form) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});