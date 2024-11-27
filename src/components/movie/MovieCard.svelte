<script lang="ts">
  import type { Movie } from '../../types/movie';
  import MovieMetadata from './MovieMetadata.svelte';
  
  export let movie: Movie;
  export let showRating = true;
  export let onClick: (id: number) => void;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(movie.id);
    }
  }
</script>

<div 
  class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
  on:click={() => onClick(movie.id)}
  on:keydown={handleKeyDown}
  role="button"
  tabindex="0"
>
  <div class="relative">
    <img 
      src={movie.image} 
      alt={movie.title} 
      class="w-full h-96 object-cover"
      loading="lazy"
    >
    <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
  </div>
  
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2 line-clamp-2">{movie.title}</h2>
    <MovieMetadata 
      year={movie.year}
      rating={showRating ? movie.rating : undefined}
    />
  </div>
</div>