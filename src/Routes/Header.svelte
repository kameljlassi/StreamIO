<script>
    import Dropdown from 'sv-bootstrap-dropdown';
	let dropdownTriggerHelp;
    let dropdownTriggerAccount;
    import {auth} from '../firebase'
    // Code only for Replit
    const logout = () => {
        auth.signOut()
    }
    window.process = {
        env: 'production'
}
</script>

<style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
    * {
        color: white;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
    }

    .container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100px;
        position: fixed;
        background: rgba(255,255,255,0.5);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255,255,255,0.25);
    }

    .right {
        padding: 20px;
        display: flex;
        align-items: center;
    }

    .title {
        display: flex;
        padding: 20px 15px;
        font-size: 30px;
    }

    .logo {
        background-image: url('../images/header/logo.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 40px;
        width: 40px;
        padding: 10px 15px;
    }

    .left {
        padding: 20px;
        display: flex;
        align-items: center;
    }

    .help {
        padding: 10px 15px
    }



    img {
        width: 20px;
        align-items: center;
        padding: 0 3px 0 3px  ;
    }
    .helpbtn {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .Helpdrop {
        background-color: #406782;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
    }
    .Helpdrop button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
    }
    .Helpdrop button:hover {
        color: #FBAE3C;
    }
    .line {
        background-color: #26343F;
        height: 1px;
        width: 100%;
    }
    .accountbtn {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .Accountdrop {
        background-color: #406782;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
    }
    .Accountdrop button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
    }

    .Accountdrop button:hover {
        color: #FBAE3C;
    }
</style>



<div class="container">
    <div class="right">
        <div class="logo">
            
        </div>
        <div class="title">
            Stream-IO
        </div>
    </div>
    <div class="left">
        <Dropdown triggerElement={dropdownTriggerHelp}>
        <div class="help">
            <button type="button" class="helpbtn" bind:this={dropdownTriggerHelp}>Help <img src="../images/header/arrow.png" alt=""></button>
        </div>
        <div class="Helpdrop"slot="DropdownMenu">
            <button class="dropdown-item" type="button">Conact-us</button>
            <div class="line"></div>
            <button class="dropdown-item" type="button">Help page</button>
       </div>
       </Dropdown>
       
       <Dropdown triggerElement={dropdownTriggerAccount}>
        <div class="help">
            <button type="button" class="accountbtn" bind:this={dropdownTriggerAccount}>Account <img src="../images/header/account.png" alt=""></button>
        </div>
        <div class="Accountdrop"slot="DropdownMenu">
            <button class="dropdown-item" type="button">Profile</button>
            <div class="line"></div>
            <button on:click={logout} class="dropdown-item" type="button">Logout</button>
       </div>
       </Dropdown>
    </div>
</div>