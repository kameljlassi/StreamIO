<script>
    import StreamingInterface from "./Tools/StreamingInterface.svelte";
    import ShareInterface from "./Tools/ShareInterface.svelte";
    import SoundInterface from "./Tools/SoundInterface.svelte";
    import ChatInterface from "./Tools/ChatInterface.svelte";
    import SettingInterface from "./Tools/SettingInterface.svelte";
    import { onMount } from "svelte";

    let video;
    let camera_stream;
    let media_recorder;
    let blobs_recorded = [];
    let link;
    onMount(async () => {
        camera_stream = await navigator.mediaDevices.getUserMedia({ video: true});
        console.log(camera_stream)
	    video.srcObject = camera_stream;
        video.onloadedmetadata = () => {
            video.play()
        }
    });

    let ShowStream = false;
    let ShowShare = false;
    let ShowSound = false;
    let ShowChat = true;
    let ShowSetting = false;

    function ShowMeStream() {
        ShowStream = true;
        ShowShare = false;
        ShowSound = false;
        ShowChat = false;
        ShowSetting = false;
    }

    function ShowMeShare() {
        ShowShare = true;
        ShowStream = false;
        ShowSound = false;
        ShowChat = false;
        ShowSetting = false;
    }

    function ShowMeSound() {
        ShowShare = false;
        ShowStream = false;
        ShowSound = true;
        ShowChat = false;
        ShowSetting = false;
    }

    function ShowMeChat() {
        ShowShare = false;
        ShowStream = false;
        ShowSound = false;
        ShowChat = true;
        ShowSetting = false;
    }

    function ShowMeSettings() {
        ShowShare = false;
        ShowStream = false;
        ShowSound = false;
        ShowChat = false;
        ShowSetting = true;
    }
   
    const start = () => {
 
        console.log("starting")
        media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });
        media_recorder.addEventListener('dataavailable', function(e) {
            console.log("pushing")
            blobs_recorded.push(e.data);
        });
        media_recorder.addEventListener('stop', function() {
            // create local object URL from the recorded video blobs
            let video_local = URL.createObjectURL(new Blob(blobs_recorded, { type: 'video/webm' }));
            link.href = video_local;
            
        });

        // start recording with each recorded blob having 1 second video
        media_recorder.start(1000)
    }

    const end = () => {
        media_recorder.stop(); 
        setTimeout(() => {
            link.click()  
        }, 1000);
    }
</script>

<div class="stream-container">
    <div class="video-container">
        <div class="live-container">
            <video bind:this={video} />
            <div class="u-buttons">
                <button on:click={start} >record</button>
                <button on:click={end} >save</button>
                <a  download bind:this={link} href="#"></a>
            </div>
        </div>
        <div class="addvideo-container">here we add video</div>
    </div>
    <div class="stream-tools">
        <div class="tools-interface">
            {#if ShowStream}
                <StreamingInterface />
            {/if}
            {#if ShowShare}
                <ShareInterface />
            {/if}
            {#if ShowSound}
                <SoundInterface />
            {/if}
            {#if ShowChat}
                <ChatInterface />
            {/if}
            {#if ShowSetting}
                <SettingInterface />
            {/if}
        </div>
        <div class="line" />
        <div class="tools-navigator">
            <button
                class="button-img-stream"
                on:click|preventDefault={() => ShowMeStream()}
            />

            <button
                class="button-img-share"
                on:click|preventDefault={() => ShowMeShare()}
            />

            <button
                class="button-img-sound"
                on:click|preventDefault={() => ShowMeSound()}
            />

            <button
                class="button-img-chat"
                on:click|preventDefault={() => ShowMeChat()}
            />

            <button
                class="button-img-setting"
                on:click|preventDefault={() => ShowMeSettings()}
            />
        </div>
    </div>
</div>

<slot />

<style>
    .stream-container {
        display: flex;
        height: 100%;
        width: 100%;
    }

    .video-container {
        width: 65%;
        height: 100%;
    }
    .live-container {
        height: 60%;
        position: relative;
    }

    .u-buttons {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .addvideo-container {
        height: 40%;
    }

    .tools-interface {
        background-color: #001220;
        width: 100%;
        height: 89%;
    }

    .stream-tools {
        width: 35%;
    }

    .line {
        background-color: #305c7a;
        height: 0.5%;
        width: 100%;
    }
    .tools-navigator {
        background-color: #001220;
        width: 100%;
        height: 11%;
        display: flex;
    }
    .tools-navigator {
        margin: auto;
        display: flex;
        padding: 0px;
        align-items: center;
    }
    .tools-navigator button {
        margin: unset;
        color: white;
        background-color: transparent;
        border: none;
        width: 60%;
        cursor: pointer;
        height: 60%;
    }

    .button-img-stream {
        background-image: url("../images/snavigation/layersw.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .button-img-stream:focus {
        background-image: url("../images/snavigation/layerso.png");
        transition-duration: 200ms;
    }

    .button-img-share {
        background-image: url("../images/snavigation/sharew.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .button-img-share:focus {
        background-image: url("../images/snavigation/shareo.png");
        transition-duration: 200ms;
    }

    .button-img-sound {
        background-image: url("../images/snavigation/soundw.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .button-img-sound:focus {
        background-image: url("../images/snavigation/soundo.png");
        transition-duration: 200ms;
    }

    .button-img-chat {
        background-image: url("../images/snavigation/messengerw.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .button-img-chat:focus {
        background-image: url("../images/snavigation/messengero.png");
        transition-duration: 200ms;
    }

    .button-img-setting {
        background-image: url("../images/snavigation/settingsw.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    .button-img-setting:focus {
        background-image: url("../images/snavigation/settingso.png");
        transition-duration: 200ms;
    }
</style>
