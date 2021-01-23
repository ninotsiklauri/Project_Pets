//--------------------------------dark mode-------------------------------------
var darkMode = document.querySelector('button.drk');
var darkdiv = document.querySelector('div.darkdiv');
var login = document.querySelector('div.registration');
var btn = document.querySelector('button.log');
var p = document.querySelector('p.or');
var loginbgdark = document.querySelector('div.registrationbgdark');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    darkdiv.classList.toggle('divdark');
    login.classList.toggle('logindark');
    btn.classList.toggle('logdark');
    p.classList.toggle('pdark');
    loginbgdark.classList.toggle('registrationbgdarkvisible');
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
//-----------------------------------is @?--------------------------------------
function Atsign(){
    const sign = document.getElementById('email').value;
    const symbol = sign.indexOf("@");
    if (symbol == -1) {
        alert(`${"გთხოვთ სცადოთ თავიდან!"}\n${"მეილი არ შეიცავს  \" @ \" სიმბოლოს."}`)
    }else{
    //-----------------------is.?------------------------------
        const dot = sign.slice(symbol);
        const isdot = dot.indexOf(".");
        if (isdot == -1) {
            alert(`${"გთხოვთ სცადოთ თავიდან!"}\n${"მეილი არ შეიცავს \" . \" სიმბოლოს  \" @ \"-ს შემდეგ."}`)
        }else{
            //----------------------is two symbol?---------------------
            const dotnext = dot.slice(isdot);
            if (dotnext.length < 3) {
                alert(`${"გთხოვთ სცადოთ თავიდან!"}\n${"მეილი არ შეიცავს მინიმუმ ორ სიმბოლოს .-ს შემდეგ."}`)
            }
        }
    }
}
//---------------------------------is pass strong?--------------------------------------
function passstrong(){
    const pass = document.getElementById('password').value;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var upperCaseLetters = /[A-Z]/g;
    var n = pass.search(numbers);
    var letters = pass.search(lowerCaseLetters);
    var upper = pass.search(upperCaseLetters);
    //----------------------------------ena-------------------------------------
    if (letters == -1 && n == -1 && upper == -1){
        alert('გთხოვთ შეიყვანოთ პაროლი ლათინური სიმბოლოებით!');
        document.getElementById("password").value = '';
    }
    //---------------------------------susti------------------------------------
    if (letters != -1 && n == -1 && upper == -1) {
        document.querySelector('p.pass_susti').classList.toggle('block');
    }
    //-------------------------------sashualo-----------------------------------
    if (letters != -1 && n != -1 && upper == -1) {
        document.querySelector('p.pass_sashualo').classList.toggle('block');
        document.querySelector('p.pass_susti').classList.toggle('none');
    }
    if (letters != -1 && n == -1 && upper != -1) {
        document.querySelector('p.pass_sashualo').classList.toggle('block');
        document.querySelector('p.pass_susti').classList.toggle('none');
    }
    //--------------------------------dzlieri-----------------------------------
    if (letters != -1 && n != -1 && upper != -1) {
        document.querySelector('p.pass_dzlieri').classList.toggle('block');
        document.querySelector('p.pass_sashualo').classList.toggle('none');
    }
}
//-------------------------------Registration-----------------------------------
function done(){
    const sign = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const nam = document.getElementById('name').value;
    const passcheck = document.getElementById('passwordcheck').value;
    const birth = document.getElementById('birthdaytime').value;
    const mob = document.getElementById('phone').value;
    if (sign!=""&&pass!=""&&nam!=""&&passcheck!=""&&birth!=""&&mob!=""){
        alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია");
    }
}