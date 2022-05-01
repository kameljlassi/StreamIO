<script >
  import Router  from "svelte-spa-router"
  import Login from "./Routes/Login.svelte"
  import Home from "./Home.svelte"
  import NotFound from "./Routes/NotFound.svelte"
  import Stream from "./Routes/Stream.svelte"
  import LiveStream from "./Routes/LiveStream.svelte"

  let routes = {
    "/": Home,
    "/Login":Login,
    "/Stream" : Stream,
    "/Live" : LiveStream,
    "*" : NotFound
  }
</script>

  <Router {routes} />
