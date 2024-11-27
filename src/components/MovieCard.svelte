<script lang="ts">
  import type { Movie } from '../types/movie';
  
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
    <div class="flex justify-between items-center">
      <span class="text-gray-600">{movie.year}</span>
      {#if showRating && movie.rating !== undefined}
        <span class="text-yellow-500 flex items-center gap-1">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {movie.rating.toFixed(1)}
        </span>
      {/if}
    </div>
  </div>
</div>