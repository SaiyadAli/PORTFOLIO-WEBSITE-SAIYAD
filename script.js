$(document).ready(function(){

    jQuery.validator.addMethod("lettersonly", function(value, element) 
    {
     return this.optional(element) || /^[a-z," "]+$/i.test(value);
     }, "Letters and spaces only please"); 


    $("#signup-form").validate({

       rules:{
        myname:{
            lettersonly: true,
            minlength:3,
            required:true
            
        },
        myphone:{
            required:true,
            digits:true,
            maxlength:10
        },
        myemail:{
            required:true,
            email:true
        }
       },submitHandler: function(form) {
        alert("Form submitted successfully");
        form.submit();
    }


    })

   
    
})