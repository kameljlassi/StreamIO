
<script>
export let live = true;
export let recordings = false;
export let setting = false;
function recording () {
    recordings = true;
    live = false;
    setting = false;
}
function livestream() {
    live = true;
    recordings= false;
    setting = false;
}
function settings(){
    setting = true;
    recordings= false;
    live = false;
}
</script>

<style>
    * {
        color: white;
        font-family: Roboto;
        font-style: normal;
        font-size: 20px;
    }

    .container {
        position: absolute;
        top : 5%;
        width: 350px;
    }

    nav {
        width: 100%;
    }

    ul {
        padding: 30px 40px;
    }
    li {
        padding: 30px 30px;
    }
     
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    button:hover {
        color: #FBAE3C;
        background-color: transparent;
    }

    button:focus {
        color: #FBAE3C;
        background-color: transparent;
    }

</style>



<div class="container">
    <nav>
        <ul>
            <button >Manage Live Stream</button>
            <li>
                <button on:click={() => livestream()} >LiveStream Library </button>
            </li>
            <li>
                <button on:click={()=> recording()}> Recordings </button>
            </li>
        </ul>
        <ul>
            <button on:click={()=> settings()}> Settings </button>
        </ul>
    </nav>
</div>


