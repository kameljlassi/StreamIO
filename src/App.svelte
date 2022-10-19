<script>
  import Router, {push, pop, replace, location} from "svelte-spa-router";
  import Login from "./Routes/Login.svelte";
  import Home from "./Home.svelte";
  import NotFound from "./Routes/NotFound.svelte";
  import Stream from "./Routes/Stream.svelte";
  import LiveStream from "./Routes/LiveStream.svelte";
  import { db, user } from "./firebase";
  import { onMount } from "svelte";
  let routes = {
    "/": Home,
    "/Login": Login,
    "/Stream": Stream,
    "/Live": LiveStream,
    "*": NotFound,
  };

  onMount(() => {
    user.subscribe((v) => {
      console.log(v);
      if (v === undefined) {
        return
      } else if (v === null && ($location != '/Login' || $location != '/')) {
        replace('/Login')
      } else if (v !== null && ($location == '/Login' || $location == '/')) {
        replace('/Stream')
      }
    });
  });
</script>

<Router {routes} />
