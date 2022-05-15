function signup_validation()
{
    var password=document.signup_form.pswd.value;
    var confirmpassword=document.signup_form.cnfmpswd.value;

    if(document.signup_form.email.value == "")
		{
			alert("Please enter your E-mail id");
			return false;
		}

    else if(document.signup_form.fname.value == "")
		{
			alert("Please enter your Full Name");
			return false;
		}

    else if(document.signup_form.contactno.value == "")
		{
			alert("Please enter your contact number id");
			return false;
		}

    else if(document.signup_form.pswd.value == "")
		{
			alert("Please enter your Password");
			return false;
		}
    
    else if(document.signup_form.cnfmpswd.value == "")
		{
			alert("Please enter your Password");
			return false;
		}

    else if(password!=confirmpassword)
		{
			alert("Password and confirm password must match");
			return false;
		}

      alert("Your has been Successfully created");
      return true;  
}