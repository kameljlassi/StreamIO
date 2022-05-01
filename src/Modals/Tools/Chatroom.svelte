<script>
    import {db} from "../../firebase";
    import {collectionData} from "rxfire/firestore";
    import {startWith} from "rxjs/operators";

    export let user;
    export let logout;

    let message = "";
    const query = db.collection("chats").orderBy("sentAt");
    const chats = collectionData(query, "id").pipe(startWith([])); 

    function sendMessage(){
        db.collection("chats").add({
            uid:user.uid || null,
            message:message|| null,
            avatar:user.photoUrl || null,
            sentAt:+new Date()
        });
        message = "";
    }
</script>

<style>
    main {
        height: 100%;
    }
    .header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid #ddd; 
    }

    .header .logo {
        font-size: 15px;
        font-weight: 600;
        color : white;
    }
    .header button {
        background: transparent;
        padding: 5px 10px;
        border: 1px solid #ddd;
        color : #555;
        font-size: 15px;
        cursor: pointer;
    }

    .form {
        display: flex;
        width: 100%;
        height: 40px;
        
    }
    .form input {
        flex :1;
        border: none;
        outline: none;
        font-size: 16px;
        color : #111;
        padding: 10px;
    }

    .form button {
        padding: 10px;
        font-size: 20px;
        color : white;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .messages {
        width: 100%;
        height: calc(100% -30px);
        padding : 10px;
        overflow-y: auto;
    }

    .messages::-webkit-scrollbar {
        width: 4px;
        background: #fff;
    }

    .messages::-webkit-scrollbar- {
        width: 4px;
        background: #888;
    }

    .messages .message {
        margin : 10px 0px;
        display: flex;
    }

    .messages .my-message {
        justify-content: flex-end;
    }
    
    .messages .message .avatar {
        width : 30px;
        height: 30px;
        margin-right: 8px;
    }

    .messages .message .text {
        padding : 10px;
        background:  #f0f4f7;
        color : #000A12;
        font-size: 13px;
        font-weight: 600;
        max-width: fit-content;
        flex : 1;
        border-radius: 5px;
    }

    .messages .message .avatar img {
        width: 100%;
        height: 100%;
    }

    .messages .my-message .text {
        background : #555;
        color : #fff;
    }
</style>

<main>
    <div class="header">
        <div class="logo">
            username supposed to be here
        </div>
        <button on:click={logout}>logout</button>
    </div>
    <div class="messages">
        {#each $chats as chat}
            {#if user.uid==chat.uid}
            <div class="message my-message">
                <div class="text">
                    {chat.message}
                </div>
            </div>
            {:else}
            <div class="message other-message">
                <div class="avatar">
                    <img src={chat.avatar} alt="avatar">
                </div>
                <div class="text">
                    {chat.message}
                </div>
            </div>
            {/if}
    {/each}
    </div>
    <div class="form">
        <input type="text" bind:value={message}>
        <button on:click={sendMessage}>
        <i> send</i>
        </button>
    </div>
</main>