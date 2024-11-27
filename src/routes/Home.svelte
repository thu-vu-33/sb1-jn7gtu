<script lang="ts">
  import { navigate } from 'svelte-routing';
  import MovieGrid from '../components/movie/MovieGrid.svelte';
  import { recentMovies } from '../data/movies';

  function goToMovie(id: number) {
    navigate(`/movie/${id}`);
  }
</script>

<div class="py-8">
  <h1 class="text-4xl font-bold mb-8">Recent Releases</h1>
  <MovieGrid movies={recentMovies} onMovieClick={goToMovie} />
</div>