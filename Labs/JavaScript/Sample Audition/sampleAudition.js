function clearErrors() {
    for (var i = 0; i < document.forms["selectNumbers"].elements.length;i++) {
        if (document.forms["selectNumbers"].elements[i].parentElement.className.indexOf("has-") != -1) {
        document.forms["selectNumbers"].elements[i].parentElement.className = "form-group"
        }
    }
}

function getNumbers(startNum,endNum,stepNum) {
	console.log("Started Function");
    var results = [];
	console.log("lopping from " + startNum + " to " + endNum + " by " + stepNum);
    for (var i = Number(startNum); i <= Number(endNum); i+=Number(stepNum)) {
    if (i % 2 == 0) {
		console.log("pushing " + i);
        results.push(i);
    }
    }
		console.log("Get Numbers is: " + results.join(','));
        document.getElementById("tableResults").innerHTML = results.join('<br />');
}
function validateForm() {
    clearErrors();
    var startNum = document.forms["selectNumbers"]["startNum"].value;
    var endNum = document.forms["selectNumbers"]["endNum"].value;
    var stepNum = document.forms["selectNumbers"]["stepNum"].value;
    if (startNum == "" || isNaN(startNum)) {
        alert("The starting number must be a number.");
        document.forms["selectNumbers"]["startNum"].parentElement.className = "form-group has-error";
        document.forms["selectNumbers"]["startNum"].focus();
        return false;
    }
    if (endNum == "" || Number(endNum) <= Number(startNum) || isNaN(endNum)) {
        alert("The ending number must be a number larger than your starting number.");
        document.forms["selectNumbers"]["endNum"].parentElement.className = "form-group has-error";
        document.forms["selectNumbers"]["endNum"].focus();
        return false;
    } if (stepNum == "" || Number(stepNum) <= 0 || isNaN(stepNum)) {
        alert("The step number must be a positive number.");
        document.forms["selectNumbers"]["stepNum"].parentElement.className = "form-group has-errors";
        document.forms["selectNumbers"]["stepNum"].focus();
        return false;
    } else {
        getNumbers(startNum,endNum,stepNum);
        document.getElementById("submitButton").innerText = "Recalculate";
        document.getElementById("results").style.display = "block";
        document.getElementById("currentStartNum").textContent = startNum;
        document.getElementById("currentEndNum").textContent = endNum;
        document.getElementById("currentStepNum").textContent = stepNum;
        return false;
    }
}