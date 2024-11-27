<script lang="ts">
  import type { Movie } from '../types/movie';
  import MovieCard from './MovieCard.svelte';

  export let movies: Movie[];
  export let showRating = true;
  export let onMovieClick: (id: number) => void;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each movies as movie (movie.id)}
    <MovieCard {movie} {showRating} onClick={onMovieClick} />
  {/each}
</div>