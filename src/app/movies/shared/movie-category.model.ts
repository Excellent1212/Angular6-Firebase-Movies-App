import { MovieModel } from './movie.model';
import { MovieGenreModel } from './movie-genre.model';

export interface MovieCategoryModel {
    page: number;
    results: MovieModel[];
    dates?: {
        maximum: string;
        minimum: string;
    }
    total_pages: number;
    total_results: number;
}
