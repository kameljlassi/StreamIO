<script>
    import { t, locale, locales } from "../i18n";
    import {auth} from '../firebase'

    let email;
    let password;
    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email.value, password.value)
    }
</script>


<style>


.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}


.login-block {
    width: 420px;
    height: 250px;
    padding: 20px;
    background: rgba(255,255,255,0.2);
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 5px;
    margin: 0 auto;
}

.login-block h1 {
    text-align: center;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
}

.login-block input {
    width: 100%;
    height: 42px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: Montserrat;
    padding: 0 20px 0 50px;
    outline: none;
}

.login-block input#username {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.login-block input#username:focus {
    background: #fff url('http://i.imgur.com/u0XmBmv.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.login-block input#password {
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px top no-repeat;
    background-size: 16px 80px;
}

.login-block input#password:focus {
    background: #fff url('http://i.imgur.com/Qf83FTt.png') 20px bottom no-repeat;
    background-size: 16px 80px;
}

.login-block input:active, .login-block input:focus {
    border: 1px solid #FBAE3C;
}

.login-block button {
    width: 100%;
    height: 40px;
    background: #FBAE3C;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #FBAE3C;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    font-family: Montserrat;
    outline: none;
    cursor: pointer;
}

.login-block button:hover {
    background: white;
    color  : #FBAE3C;
}
.background {
  background-image: url('../images/background/2.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

.incorrect-pw {
    color: black;
    background-color: red;
    padding: 13px;
    border-radius: 10px;
    opacity: 50%;
    border-style: solid;
}
</style>




<div class="background">
<div class="container">
    <form on:submit|preventDefault={handleLogin} class="login-block">
        <h1>{$t("login.title")}</h1>
        <input bind:this={email} type="text" value="" placeholder="{$t("login.username")}" id="username" />
        <input bind:this={password} type="password" value="" placeholder="{$t("login.password")}" id="password" />
        <button type="submit">{$t("login.button")}</button>
    </form>
    <div class="incorrect-pw">
        incorrect user name or password
    </div>
</div>
</div>