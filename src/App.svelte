<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import ActionFilms from "./routes/ActionFilms.svelte";
  import MovieDetail from "./routes/MovieDetail.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex gap-4">
      <Link to="/" class="hover:text-gray-300">Home</Link>
      <Link to="/action" class="hover:text-gray-300">Action Films</Link>
    </div>
  </nav>

  <main class="container mx-auto p-4">
    <Route path="/" component={Home} />
    <Route path="/action" component={ActionFilms} />
    <Route path="/movie/:id" let:params>
      <MovieDetail id={params.id} />
    </Route>
  </main>
</Router>