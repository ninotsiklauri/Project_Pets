//--------------------------------dark mode-------------------------------------
var darkMode = document.querySelector('button.drk');
var darkdiv = document.querySelector('div.darkdiv');
var login = document.querySelector('div.login');
var btn = document.querySelector('button.log');
var p = document.querySelector('p.or');
var loginbgdark = document.querySelector('div.loginbgdark');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    darkdiv.classList.toggle('divdark');
    login.classList.toggle('logindark');
    btn.classList.toggle('logdark');
    p.classList.toggle('pdark');
    loginbgdark.classList.toggle('loginbgvisible');
})
//-----------------------------------eye----------------------------------------
var state = false;
function eye(){
    if(state){
    document.getElementById("password").setAttribute("type", "password");
    document.querySelector('span.eye').classList.toggle('eye1');
    state = false;
}else{
    document.getElementById("password").setAttribute("type", "text");
    document.querySelector('span.eye').classList.toggle('eye2');
    state = true;
}}