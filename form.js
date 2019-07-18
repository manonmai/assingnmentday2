function validateName() {
    var x = document.myForm.name1.value;
    var regex=(/^[A-Za-z]{3,20}$/);
    if (!regex.test(x)) {
     document.getElementById("name2").style.display="inline";
    }
    else{
        document.getElementById("name2").style.display="none";
    }
}
function validateNumber() {
    var x = document.myForm.number.value;
    var regex=(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/);
    if (!regex.test(x)) {
     document.getElementById("number").style.display="inline";
    }
    else{
        document.getElementById("number").style.display="none";
    }
}
function validateDob() {
    var x = document.myForm.dob.value;
    var regex=(/(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])\d\d$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/);
    if (!regex.test(x)) {
     document.getElementById("dob2").style.display="inline";
    }
    else{
        document.getElementById("dob2").style.display="none";
    }
}

function validateEmail() {
    var x = document.myForm.emails.value;
    var regex=(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    if (!regex.test(x)) {
     document.getElementById("email1").style.display="inline";
    }
    else{
        document.getElementById("email1").style.display="none";
    }
}
