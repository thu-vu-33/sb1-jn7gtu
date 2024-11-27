<script lang="ts">
  import { onMount } from 'svelte';
  import { findMovieById } from '../utils/movieUtils';
  import VideoPlayer from '../components/player/VideoPlayer.svelte';
  import ErrorMessage from '../components/ui/ErrorMessage.svelte';
  import LoadingState from '../components/ui/LoadingState.svelte';
  import MovieMetadata from '../components/movie/MovieMetadata.svelte';
  import Button from '../components/ui/Button.svelte';
  import Icon from '../components/ui/Icon.svelte';
  import type { Movie } from '../types/movie';

  export let id = '';
  let isPlaying = false;
  let movie: Movie | null = null;
  let error: string | null = null;
  let isLoading = true;

  onMount(async () => {
    try {
      const movieId = parseInt(id);
      if (isNaN(movieId)) {
        error = "Invalid movie ID";
        return;
      }
      
      const foundMovie = findMovieById(movieId);
      if (!foundMovie) {
        error = "Movie not found";
      } else {
        movie = foundMovie;
      }
    } catch (e) {
      error = "Failed to load movie details";
    } finally {
      isLoading = false;
    }
  });

  function togglePlay() {
    if (!movie?.videoUrl) {
      error = "Video URL not available";
      return;
    }
    isPlaying = !isPlaying;
  }
</script>

{#if isLoading}
  <LoadingState />
{:else if error}
  <ErrorMessage message={error} />
{:else if movie}
  <div class="py-8">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        {#if !isPlaying}
          <img src={movie.image} alt={movie.title} class="w-full h-[450px] object-cover">
          <Button
            variant="primary"
            onClick={togglePlay}
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-6"
          >
            <Icon name="play" size="lg" />
          </Button>
        {:else}
          <VideoPlayer 
            title={movie.title} 
            videoUrl={movie.videoUrl} 
            onStop={togglePlay} 
          />
        {/if}
      </div>

      <div class="p-6">
        <h1 class="text-3xl font-bold mb-4">{movie.title}</h1>
        <MovieMetadata 
          year={movie.year}
          duration={movie.duration}
          rating={movie.rating}
        />
        {#if movie.description}
          <p class="text-gray-700 leading-relaxed mt-4">{movie.description}</p>
        {/if}
      </div>
    </div>
  </div>
{/if}