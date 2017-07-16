function clearErrors() {
    for (var i = 0; i < document.forms["numberFun"].elements.length; i++) {
        if (document.forms["numberFun"].elements[i].parentElement.className.indexOf("has-") != -1) {

            document.forms["numberFun"].elements[i].parentElement.className = "form-group";
        }
    }
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Input for Number 1 must be a number.");
        document.forms["numberFun"]["num1"].parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Input for Number 2 must be a number.");
        document.forms["numberFun"]["num2"].parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num2"].focus();
        return false;
    } else {
    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("addResult").innerText = Number(num1) + Number(num2);
    document.getElementById("subtractResult").innerText = num1 - num2;
    document.getElementById("multiplyResult").innerText = num1 * num2;
    document.getElementById("divideResult").innerText = num1 / num2;
    // We are returning false so that the form doesn't submit
    // and so that we can see the results
    return false;
    }
}