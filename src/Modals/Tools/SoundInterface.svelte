<script>
import Slider from '@bulatdashiev/svelte-slider';
import RangeSlider from 'svelte-range-slider-pips'

let monitor = {
    'name' : 'monitor',
    'id' : 5,
    'sound' : [10],
}

let sounds = [
    {
        'name' : 'HDMI1',
        'id' : 1,
        'sound' : [0],
    },
    {
        'name' : 'HDMI2',
        'id' : 2,
        'sound' : [30],
    },
    {
        'name' : 'USB',
        'id' : 3,
        'sound' : [50],
    },
    {
        'name' : 'Linein1',
        'id' : 4,
        'sound' : [10],
    },
    {
        'name' : 'Linein2',
        'id' : 5,
        'sound' : [80],
    },
]
let selected = sounds[1]
</script>

<style>
* {
    font-family: roboto;
    color: white;
}

.sound-container {
    padding: 20px 30px;
    padding-bottom: 0!important;
    padding-top: 0!important;
}

.title {
    display : flex;
    justify-content: center;
    padding: 25px 15px;
    font-size: 30px;
    font-weight: lighter;
}

.IOsource {
    font-size: 12px;
    padding: 10px;
}
.title2, .monitor-title {
    font-weight: lighter;
    font-size: 15px;
}

input {
    display: none;
}

.iotitles {
    padding: 5px 0px;
}
</style>


<div class="sound-container">
    <div class="title">
        Volume
    </div>
    <div class="monitor">
        <div class="monitor-title">
            Monitor
        </div>
        <div style="--range-handle-focus: #FBAE3C; --range-range: #FBAE3C">
            <RangeSlider id="slider" bind:values={monitor.sound} range="min"  pips  />
        </div>
    </div>
    <div class="IOsource">
        Audio input/output 
    </div>
    <div class="iosound">
        <div class="title2">
            {#each sounds as s}
            <label for={s.name}>
                <input  type="radio" bind:group={selected} name="IO" id={s.id} value={s} >
                <div class="iotitles">
                {s.name} {s.sound}% 
                </div>
                <div class="iopercentage"></div>
                <div style="--range-handle-focus: #FBAE3C; --range-range: #FBAE3C">
                    <RangeSlider id="slider" bind:values={s.sound} range="min"  pips  />
                </div>
            </label>
            {/each}
        </div>
    </div>
</div>

