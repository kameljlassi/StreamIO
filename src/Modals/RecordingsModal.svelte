<script>
    import VideoPlayer from 'svelte-video-player';
    import { items, dispatcher } from './VideoStore.js';
    let searchQuery = ''
	
	$: dispatcher.filter(searchQuery)

    let searchTerm="";
    let poster ="";
    let source ="";
    let list;
    $: {
		list = $items.filter(item => item.active)
	  dispatcher.filter(searchQuery) // set after list
	}

</script>

<style>
    main {
        width: 100%;
        padding: 10px 20px;
    }
    .title {
        color: white;
        font-size: 25px;
        font-weight: lighter;
    }

    .nav-bar {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .video-container {
        padding-top: 10px;
        display: grid;
        grid-template-columns: 23% 23% 23% 23%;
        grid-template-rows: 70% 70% 70% 70%;
        justify-content: space-evenly;  
        overflow-y: scroll;
    }
    .video-container::-webkit-scrollbar {
        background-color: #001220;
        border-radius: 9px;
    }
    .video-container::-webkit-scrollbar-thumb{
        background-color: #ABAEB2;
        border-radius: 9px;
    }
    .description {
        color: white;
        padding: 5px;
    }
    .condition {
        display: flex;
        color: white;
        font-size: 30px;
    }
</style>



<main>
    <div class="nav-bar">
    <div class="title">
        Recordings
    </div>
    <input type="text" bind:value={searchQuery} placeholder="Search"/>
    </div>
    <div class="video-container">
        {#each list as vid}
        <div style="display: none;">{source=vid.source}</div>
        <div class="video">
        <VideoPlayer color="#001220" {source} />
        <div class="description">
            {vid.description}
        </div>
        </div>
        {:else}
        <div class="condition">
            Video doesn't exist
        </div>
        {/each}
    </div>
</main>
<slot />
