
document.getElementById("tSubmitRegister").onclick = function(){validateRegister()};
function validateRegister() {
    let FName = document.getElementById("tFristName");
    let LName = document.getElementById("tLastName");
    let checkNewsletter = document.getElementById("tSubtoNewsletter");
    let Email = document.getElementById("tEmail");
    let passWord = document.getElementById("tPassword");
    let confirPassword = document.getElementById("tConfirPassword");
    let checkAccept = document.getElementById("tCheckAccept");

    if (FName.value =="") {
        document.getElementById("errorFN").innerHTML="Please enter your Frist Name!";
        document.getElementById("errorFN").style.display="block";
        document.getElementById("errorFN").style.color="red";
    } else {
        document.getElementById("errorFN").innerHTML="";
    }

    if (LName.value =="") {
        document.getElementById("errorLN").innerHTML="Please enter your Last Name!";
        document.getElementById("errorLN").style.display="block";
        document.getElementById("errorLN").style.color="red";
    } else {
        document.getElementById("errorLN").innerHTML="";
    }

    if (checkNewsletter.checked == false) {
        document.getElementById("errorSN").innerHTML="Please checked!";
        document.getElementById("errorSN").style.display="block";
        document.getElementById("errorSN").style.color="red";
    } else {
        document.getElementById("errorSN").innerHTML="";
    }

    if (Email.value =="" && Email.value.indexOf('@') == -1) {
        console.log("éz");
        document.getElementById("errorE").style.display="block";
        document.getElementById("errorE").innerHTML="Please enter your Email Address correct!";
       
        document.getElementById("errorE").style.color="red";
    } else {
        document.getElementById("errorE").innerHTML="";
    }

    if (passWord.value =="") {
        document.getElementById("errorP").innerHTML="Please enter your Password!";
        document.getElementById("errorP").style.display="block";
        document.getElementById("errorP").style.color="red";
    } else {
        document.getElementById("errorP").innerHTML="";
    }

    if (confirPassword.value =="" || confirPassword.value !== passWord.value) {
        document.getElementById("errorCP").innerHTML="Please enter your Password Confirmation correct!";
        document.getElementById("errorCP").style.display="block";
        document.getElementById("errorCP").style.color="red";
    } else {
        document.getElementById("errorCP").innerHTML="";
    }

    let RegObj = JSON.parse(localStorage.getItem("USER")) || [];

    if (checkAccept.checked == false) {
        document.getElementById("errorA").innerHTML="Please checked!";
        document.getElementById("errorA").style.display="block";
        document.getElementById("errorA").style.color="red";
    } else if (FName.value!==""&&
        LName.value!==""&&
        checkNewsletter.checked==true&&
        Email.value!==""&&
        Email.value.indexOf('@')!== -1&&
        passWord.value!==""&&
        confirPassword.value==passWord.value) {
        RegObj.push({
            emailAdress: Email.value,
            password: passWord.value
        });  
        localStorage.setItem("USER",JSON.stringify(RegObj));

        document.getElementById("success").innerHTML="You Have Successfully Register";
        document.getElementById("success").style.display="block";
        document.getElementById("success").style.color="green";
        location=("index.html");
    } 
}