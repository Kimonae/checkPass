const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const alert = document.getElementById("alert") ;

checkPassword.addEventListener('keyup', function() {
 // Votre code ici
 var x = password.value;
 var y = checkPassword.value;
 
 if(x == y) {

    alert.style.color = "green";
    alert.innerHTML = "Success";

 }else{


    alert.style.color = "red";
    alert.innerHTML = "No pass";

 }
})
