<script>
    import { auth,googleProvider } from "../../firebase";
    import {authState} from "rxfire/auth";
    import Chatroom from './Chatroom.svelte'
    let user;
    const unsubscribe = authState(auth).subscribe(usr => user = usr);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
    
    function logout () {
        auth.signOut();
    }
</script>

<style>


    .chat-title {
        display: flex;
        justify-content: center;
        color: white;
        padding: 20px 15px;
        font-family: roboto;
        font-size: 40px;
        font-weight: lighter;
    }
    .user-container {
        display: flex;
        justify-content: center;
        background-color: #000A12;
        padding: 20px;
        width: 100%;
        max-width: fit-content;
        margin: auto;
        border-radius: 9px;
        min-height: 350px;
        max-height: 350px;
    }
</style>

<div class="chat-container">
    <div class="chat-title">
        Chat
    </div>
    <div class="user-container">

        <div class="users">
            {#if user}
                <Chatroom user={user} logout={logout}/>
            {:else}
            <button on:click={login}>
                <i class="fa fa-google"> </i>
                Sign in with google
            </button>
            {/if}
        </div>
        <div class="typing-box">

        </div>
    </div>
</div>