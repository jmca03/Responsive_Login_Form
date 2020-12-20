

var BtnMenu = document.getElementById('btn-menu');
var BtnClose = document.getElementById('btn-close');
var NavList = document.getElementById('nav-list');
var LoginBrand = document.getElementById('login-brand');
var Alert = document.getElementById('alert-form');
var AlertTxt = document.getElementById('alert-txt');
var UserContainer = document.getElementById('username-form-container');
var PassContainer = document.getElementById('password-form-container');
var SigninContainer = document.getElementById('signin-form-container');
var SignoutContainer = document.getElementById('signout-form-container');
var FormFooter = document.getElementById('footer-form-container');
var BtnSignin = document.getElementById('btn-form-signin');
var BtnSignout = document.getElementById('btn-form-signout');
var Username = document.getElementById('username');
var Password = document.getElementById('password');

window.onload = new function()
{
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var resp = data[0].response;
            console.log(resp)
            if( resp != '')
            {
                if(resp == 'NOT LOGGED')
                {
                    SignoutContainer.classList.add('hide');
                    SigninContainer.classList.remove('hide');
                    UserContainer.classList.remove('hide');
                    PassContainer.classList.remove('hide');
                    FormFooter.classList.remove('hide');
                    Alert.classList.add('hide')
                    LoginBrand.innerHTML = "Sign in";
                }
                else if(resp == 'MISMATCH')
                {
                    SignoutContainer.classList.add('hide');
                    SigninContainer.classList.remove('hide');
                    UserContainer.classList.remove('hide');
                    PassContainer.classList.remove('hide');
                    FormFooter.classList.remove('hide');
                    Alert.classList.remove('hide')
                    Alert.classList.add('failed')
                    AlertTxt.innerHTML = "Login Failed";
                    LoginBrand.innerHTML = "Sign in";   
                }
                else
                {
                    SignoutContainer.classList.remove('hide');
                    SigninContainer.classList.add('hide');
                    UserContainer.classList.add('hide');
                    PassContainer.classList.add('hide');
                    FormFooter.classList.add('hide');
                    Alert.classList.remove('hide')
                    Alert.classList.add('success')
                    AlertTxt.innerHTML = "Login Succeed"
                    LoginBrand.innerHTML = "Dashboard";
                }
                
                
            }
        }
    };

    xhr.open('GET', 'session.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}


BtnMenu.onclick = function()
{
    NavList.classList.add('dropdown');
    NavList.classList.remove('hide-mobile');
    BtnMenu.classList.remove('btn-nav');
    BtnClose.classList.add('btn-nav');
    
}

BtnClose.onclick = function()
{   
    NavList.classList.add('hide-mobile');
    NavList.classList.remove('dropdown');
    BtnMenu.classList.add('btn-nav');
    BtnClose.classList.remove('btn-nav');
}


BtnSignin.onclick = function()
{
    var xhr = new XMLHttpRequest();
    var params = "s=0S&user=" + Username.value + "&pass=" + Password.value;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var resp = data[0].response;
            console.log(resp)
            if( resp != '')
            {
                if(resp === 'NOT LOGGED')
                {
                    SignoutContainer.classList.add('hide');
                    SigninContainer.classList.remove('hide');
                    UserContainer.classList.remove('hide');
                    PassContainer.classList.remove('hide');
                    FormFooter.classList.remove('hide');
                    Alert.classList.add('hide');
                    LoginBrand.innerHTML = "Sign in";
                   
                }
                else if (resp == 'MISMATCH')
                {
                    SignoutContainer.classList.add('hide');
                    SigninContainer.classList.remove('hide');
                    UserContainer.classList.remove('hide');
                    PassContainer.classList.remove('hide');
                    FormFooter.classList.remove('hide');
                    Alert.classList.remove('hide')
                    Alert.classList.add('failed')
                    AlertTxt.innerHTML = "Login Failed";
                    LoginBrand.innerHTML = "Sign in";   
                }
                else
                {
                    SignoutContainer.classList.remove('hide');
                    SigninContainer.classList.add('hide');
                    UserContainer.classList.add('hide');
                    PassContainer.classList.add('hide');
                    FormFooter.classList.add('hide');
                    Alert.classList.remove('hide')
                    Alert.classList.add('success')
                    AlertTxt.innerHTML = "Login Succeed"
                    LoginBrand.innerHTML = "Dashboard";
                }
                
                
            }
        }
    };

    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

BtnSignout.onclick = function()
{
    var xhr = new XMLHttpRequest();
    var params = "s=1";

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var resp = data[0].response;
            console.log(resp)
            if( resp != '')
            {
                if(resp == 'NOT LOGGED')
                {
                    SignoutContainer.classList.add('hide');
                    SigninContainer.classList.remove('hide');
                    UserContainer.classList.remove('hide');
                    PassContainer.classList.remove('hide');
                    FormFooter.classList.remove('hide');
                    Alert.classList.add('hide')
                    LoginBrand.innerHTML = "Sign in";
                }
                else
                {
                    SignoutContainer.classList.remove('hide');
                    SigninContainer.classList.add('hide');
                    UserContainer.classList.add('hide');
                    PassContainer.classList.add('hide');
                    FormFooter.classList.add('hide');
                    Alert.classList.remove('hide')
                    Alert.classList.add('success')
                    AlertTxt.innerHTML = "Login Succeed"
                    LoginBrand.innerHTML = "Dashboard";
                }
                
                
            }
        }
    };

    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}