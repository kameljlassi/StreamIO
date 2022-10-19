<script>
  import Header from "./Header.svelte";
</script>


<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.button {
  padding: 20px;
  width: 300px;
}
.button img {
  width: 40px;
  padding: 5px;
}
.button a {
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 23px;
  background-color: #FBAE3C;
  padding: 8px;
  border-radius: 3px;
  color: white;
  text-decoration: none;
  transition-duration: 500ms;
  justify-content: center;
  align-items: center;
}
.button a:hover {
  color:#FBAE3C;
  background-color: white;
  transition-duration: 500ms;
}
.background {
  background-image: url('../images/background/2.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

.about-us {
  bottom : 10px;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
}

.about-us a {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: white;
  font-size: 15px;
  text-decoration: none;
}

.about-us img {
  width: 20px;
}
</style>




<Header />
<div class="background">

<div class="container">
  <div class="button">
    <a href="/#/Live"><img src="../images/stream/stream.png" alt="Stream"> Manage Live Stream</a>
  </div>
  <div class="button">
    <a href="/#/Login"><img src="../images/stream/settings.png" alt="Settings">Settings</a>
  </div>
</div>
<div class="about-us">
  <a href="ee"><img src="../images/stream/aboutus.png" alt=""> ABOUT US</a>
</div>
</div>

