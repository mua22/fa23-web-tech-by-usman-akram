function doBindings(){
    let loginBtn = document.getElementById("loginBtn");
loginBtn.onclick = handleLogin;

}
// setTimeout(doBindings,2000);
window.onload = doBindings;
function handleLogin(){
    let input = document.getElementById("email");
    // alert(input.value);
    if(input.value){
        input.classList.remove("error");
        document.getElementById("errorMessage").style.display="none"

    }else {
        input.classList.add("error");
        document.getElementById("errorMessage").style.display="block"
    }
}