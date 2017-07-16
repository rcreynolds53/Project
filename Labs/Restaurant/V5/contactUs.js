function clearErrors() {
    for (var i = 0; i < document.forms["contactForm"].elements.length; i++) {
        if (document.forms["contactForm"].elements[i].parentElement.className.indexOf("has-") != -1) {
            document.forms["contactForm"].elements[i].parentElement.className = "form-group"
        }
    }
}
function validateForm() {
    clearErrors();
    var wholeName = document.forms["contactForm"]["inputName"].value;
    var userEmail = document.forms["contactForm"]["inputEmail"].value;
    var userPhone = document.forms["contactForm"]["inputPhone"].value;
    var inquiryReason = document.forms["contactForm"]["inquiryReason"].value;
    var additionalInfo = document.forms["contactForm"]["additionalInfo"].value;
    var radio1 = document.forms["contactForm"]["radio1"].value;
    var radio2 = document.forms["contactForm"]["radio2"].value;
    var checkbox1 = document.forms["contactForm"]["checkbox1"].value
    var checkbox2 = document.forms["contactForm"]["checkbox2"].value
    var checkbox3 = document.forms["contactForm"]["checkbox3"].value
    var checkbox4 = document.forms["contactForm"]["checkbox4"].value
    var checkbox5 = document.forms["contactForm"]["checkbox5"].value
    
    if (wholeName == "") {
        alert("Please enter your first and last name ex. Jane Doe.");
        document.forms["contactForm"]["inputName"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["inputName"].focus();
        return false;
    }
    if (userEmail = "" || !userEmail.includes("@")) {
        alert("Please enter a valid email address.");
        document.forms["contactForm"]["inputEmail"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["inputEmail"].focus();
        return false;
    }
    if (userPhone == "" || userPhone.length != 12) {
        alert("Please enter a valid phone number using the format 012-345-6789.");
        document.forms["contactForm"]["inputPhone"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["inputPhone"].focus();
        return false;
    } 
    if (!document.getElementById("radio1").checked && !document.getElementById("radio2").checked) {
        alert('Please confirm whether or not you have been to our restaurant!');
        document.forms["contactForm"]["radio2"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["radio2"].focus();
        return false;
    }
    alert("Thank you for contacting us! Your opinion as a customer is important to us.");
}