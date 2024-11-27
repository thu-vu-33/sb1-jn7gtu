export interface Movie {
  id: number;
  title: string;
  image: string;
  year: number;
  rating?: number;
  duration?: string;
  description?: string;
  videoUrl?: string;
}