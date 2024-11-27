import type { Movie } from '../types/movie';
import { actionMovies, recentMovies } from '../data/movies';

export function findMovieById(id: number): Movie | undefined {
  return [...actionMovies, ...recentMovies].find(m => m.id === id);
}

export function paginateMovies(movies: Movie[], page: number, itemsPerPage: number): Movie[] {
  const startIndex = (page - 1) * itemsPerPage;
  return movies.slice(startIndex, startIndex + itemsPerPage);
}

export function calculateTotalPages(totalItems: number, itemsPerPage: number): number {
  return Math.ceil(totalItems / itemsPerPage);
}