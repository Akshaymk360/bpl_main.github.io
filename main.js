
var pass = "bpl14@unics"

function addUser() {

    var getpass = document.getElementById("password").value;
    console.log(getpass);
    if(getpass == pass){
        window.location = "admin.html";
    }else {
        document.getElementById("password").value = "Password Incorrect";
    }

}

function score(){
    window.location = "user.html";
}
