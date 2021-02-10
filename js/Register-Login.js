function validateRegister() {
  let FNameVal = document.getElementById("fNameReg").value;
  let LNameVal = document.getElementById("lNameReg").value;
  let EmailVal = document.getElementById("EmailReg").value;
  let passwordVal = document.getElementById("passwordReg").value;
  let confirPasswordVal = document.getElementById("CPReg").value;
  let dataObj = JSON.parse(localStorage.getItem("users")) || [];

  if (FNameVal == "") {
    document.getElementById("errorFN").innerHTML =
      "Please enter your Frist Name!";
    document.getElementById("errorFN").style.display = "block";
  } else {
    document.getElementById("errorFN").innerHTML = "";
  }
  if (LNameVal == "") {
    document.getElementById("errorLN").innerHTML =
      "Please enter your Last Name!";
    document.getElementById("errorLN").style.display = "block";
  } else {
    document.getElementById("errorLN").innerHTML = "";
  }
  if (EmailVal == "" || EmailVal.indexOf("@") == -1) {
    document.getElementById("errorE").innerHTML =
      "Please enter your Email Address correct!";
    document.getElementById("errorE").style.display = "block";
  } else {
    document.getElementById("errorE").innerHTML = "";
  }
  if (passwordVal == "") {
    document.getElementById("errorP").innerHTML = "Please enter your Password!";
    document.getElementById("errorP").style.display = "block";
  } else {
    document.getElementById("errorP").innerHTML = "";
  }
  if (confirPasswordVal == "" || confirPasswordVal !== passwordVal) {
    document.getElementById("errorCP").innerHTML =
      "Please enter your Password Confirmation correct!";
    document.getElementById("errorCP").style.display = "block";
  } else {
    document.getElementById("errorCP").innerHTML = "";
  }
  if (
    FNameVal !== "" &&
    LNameVal !== "" &&
    EmailVal !== "" &&
    EmailVal.indexOf("@") !== -1 &&
    passwordVal !== "" &&
    confirPasswordVal == passwordVal
  ) {
    dataObj.push({
      fristName: FNameVal,
      lastName: LNameVal,
      emailAdress: EmailVal,
      password: passwordVal
    });
    localStorage.setItem("users", JSON.stringify(dataObj));
     document.getElementById("msg").innerHTML=`<div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Well done!</strong>You Have Successfully Register.
    </div>`
    window.open("file:///C:/Users/Maryouma/Desktop/projet%20js/login.html","_blank");
  }
}

function validAccLogin() {
  let userEmailVal = document.getElementById("emailLogin").value;
  let userPasswordVal = document.getElementById("passwordLogin").value;
  let dataObj = JSON.parse(localStorage.getItem("users")) || [];

  let user = dataObj.find(
    (user) =>
      user.emailAdress == userEmailVal && user.password == userPasswordVal
  );

  if (user !== undefined) {
    if (user.emailAdress == "admin@admin.com" && user.password == "admin") {
      window.open("file:///C:/Users/Maryouma/Desktop/projet%20js/admin-product-management.html","_blank");
    }
    window.open("file:///C:/Users/Maryouma/Desktop/projet%20js/gourmet.html","_blank");
  } else {
    // alert("Please check your Email and Password!");
    document.getElementById("msg").innerHTML=`<div class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Warning!</strong>Please check your Email and Password!
    </div>`
  }
}
