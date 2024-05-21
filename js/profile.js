function open_register_form() {
    document.getElementsByClassName("login_form_div")[0].style.display = "none";
    document.getElementsByClassName("registration_form_div")[0].style.display = "block";
    document.getElementsByClassName("footer")[0].style.position = "relative";
}
function close_register_form() {
    document.getElementsByClassName("registration_form_div")[0].style.display = "none";
    document.getElementsByClassName("login_form_div")[0].style.display = "block";
    document.getElementsByClassName("footer")[0].style.position = "fixed";
}

function printError(Msg) {
    alert(Msg)
}

function validateForm() {
    var firstname = document.regform.register_firstname.value;
    var middlename = document.regform.register_middlename.value;
    var lastname = document.regform.register_lastname.value;
    var gender = document.regform.register_gender.value;
    var dob = document.regform.register_dob.value;
    var address = document.regform.register_address.value;
    var city = document.regform.register_city.value;
    var pincode = document.regform.register_pincode.value;
    var country = document.regform.register_country.value;
    var emailid = document.regform.register_emailid.value;
    var password = document.regform.register_password.value;
    var repassword = document.regform.register_repassword.value;

    var error = false;

    var regex = /^[a-zA-Z]+$/;
    if (regex.test(firstname) === false) {
        printError("Please enter a valid First name");
        error = true;
    }

    if ((middlename != "") && (regex.test(middlename) === false)) {
        printError("Please enter a valid Middle name");
        error = true;
    }
    if (regex.test(lastname) === false) {
        printError("Please enter a valid Last name");
        error = true;
    }

    regex = /^\S+@\S+\.\S+$/;
    if (regex.test(emailid) === false) {
        printError("Please enter a valid email address");
        error = true;
    }

    if (password != repassword) {
        printError("The passwords entered do not match!");
        error = true;
    }

    if (middlename == "") { middlename = "-"; }
    if (gender == "") { gender = "-"; }

    if (error == true) {
        return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
            "First Name: " + firstname + "\n" +
            "Middle Name: " + middlename + "\n" +
            "Last Name: " + lastname + "\n" +
            "Gender: " + gender + "\n" +
            "Date of Birth: " + dob + "\n" +
            "Address: " + address + "\n" +
            "City: " + city + "\n" +
            "Pincode: " + pincode + "\n" +
            "Country: " + country + "\n" +
            "Email ID: " + emailid + "\n"
        alert(dataPreview);
    }
};

var app = angular.module('loginForm', []);
app.controller('validate', function ($scope) {
    $scope.email = "";
});