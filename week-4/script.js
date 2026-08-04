function validateForm()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var service = document.getElementById("service").value;
    var date = document.getElementById("date").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var terms = document.getElementById("terms").checked;

    var gender = document.getElementsByName("gender");
    var genderSelected = false;

    for(var i=0; i<gender.length; i++)
    {
        if(gender[i].checked)
        {
            genderSelected = true;
            break;
        }
    }

    if(name=="")
    {
        alert("Enter your name");
        return false;
    }

    if(email=="")
    {
        alert("Enter your email");
        return false;
    }

    if(phone.length!=10 || isNaN(phone))
    {
        alert("Enter a valid 10-digit phone number");
        return false;
    }

    if(age=="" || age<18)
    {
        alert("Age must be 18 or above");
        return false;
    }

    if(!genderSelected)
    {
        alert("Select your gender");
        return false;
    }

    if(service=="")
    {
        alert("Select a service");
        return false;
    }

    if(date=="")
    {
        alert("Select an appointment date");
        return false;
    }

    if(password.length<6)
    {
        alert("Password must be at least 6 characters");
        return false;
    }

    if(password!=confirmPassword)
    {
        alert("Passwords do not match");
        return false;
    }

    if(!terms)
    {
        alert("Accept the Terms & Conditions");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
