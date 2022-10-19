<script>
  import Header from "./Header.svelte";
  import Navigation from "./Navigation.svelte"
  import StreamModal from "../Modals/StreamModal.svelte"
  import RecordingsModal from "../Modals/RecordingsModal.svelte"
  import Settings from "../Modals/Settings.svelte"
  let live=false;
  let recordings=true;
  let setting = false;
</script>


<style>


.background {
  background-image: url('../images/background/2.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

.container {
  width: 350px;
  height: 86%;
  position : absolute;
  top : 13.6%;
  background: rgba(255,255,255,0.25);
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  border: 1px solid rgba(255,255,255,0.125)
}

.Modals {
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  height: 75%;
  width: 75%;
  top: 22%;
  left: 11%;
}


</style>




<Header />

<div class="background">
  <div class="container">
    <Navigation bind:live={live} bind:recordings={recordings} bind:setting={setting}/>
  </div>
  <div class="Modals">
    {#if (live == false && recordings == false && setting==false)}
    welcome to stream IO
    {/if}
    {#if live}
    <StreamModal/>
    {/if}
    {#if recordings}
    <RecordingsModal />
    {/if}
    {#if setting}
    <Settings />
    {/if}
  </div>
</div>



