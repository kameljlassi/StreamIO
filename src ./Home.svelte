<script>
import { t, locale, locales } from "./i18n";

$: time = new Date().toLocaleDateString($locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>


<style>

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 59px;
  padding: 3px;
}
.slogan {
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  padding: 15px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}


.button a {
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 23px;
  background-color: #FBAE3C;
  padding: 20px;
  border-radius: 3px;
  color: white;
  text-decoration: none;
  transition-duration: 500ms;
}
.button a:hover {
  color:#FBAE3C;
  background-color: white;
  transition-duration: 500ms;
}
.background {
  background-image: url('../images/background/1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

.time {
  color: white;
  padding: 5px ;
  font-size: 15px;
  margin: 0;
}

.lang-time-container {
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 100%;
}

select {
  padding: 2px;
}
</style>



<div class="background">
  <div class="lang-time-container">
    <select bind:value={$locale}>
      {#each locales as l}
        <option value={l}>{l}</option>
      {/each}
      
    </select>
    <p class="time">{@html $t("homepage.time", { time })}!</p>
  </div>
    <div class="container">
      <div class="title">Stream-IO</div>
      <div class="slogan">{$t("homepage.subtitle")}!</div>
      <div class="button">
        <a href="/#/Login">{$t("homepage.title")}!</a>
      </div>
    </div>
</div>

