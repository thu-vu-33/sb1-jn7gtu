<script lang="ts">
  import { navigate } from "svelte-routing";
  import MovieGrid from '../components/movie/MovieGrid.svelte';
  import Pagination from '../components/ui/Pagination.svelte';
  import { actionMovies } from '../data/movies';
  import { paginateMovies, calculateTotalPages } from '../utils/movieUtils';

  let currentPage = 1;
  const itemsPerPage = 6;

  $: totalPages = calculateTotalPages(actionMovies.length, itemsPerPage);
  $: paginatedMovies = paginateMovies(actionMovies, currentPage, itemsPerPage);

  function goToMovie(id: number) {
    navigate(`/movie/${id}`);
  }

  function handlePageChange(page: number) {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="py-8">
  <h1 class="text-4xl font-bold mb-8">Action Films</h1>
  
  <div class="mb-8">
    <MovieGrid 
      movies={paginatedMovies} 
      showRating={false} 
      onMovieClick={goToMovie} 
    />
  </div>

  <Pagination 
    {currentPage} 
    {totalPages} 
    onPageChange={handlePageChange} 
  />
</div>