import { Routes, Route } from 'react-router-dom';
import * as MovieService from 'services/api';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { NotFound } from 'pages/NotFound';

import { ROUTES } from 'utils/routes';

MovieService.getSearchMovie('fight');
MovieService.getTrendingMovies();
MovieService.getMovieDetails(345);
MovieService.getMovieActors(344);
MovieService.getMovieReviews(346);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.MOVIES} element={<MoviesPage />} />
          <Route path={ROUTES.MOVIE_DETAILS} element={<MovieDetailsPage />}>
            <Route path={ROUTES.MOVIE_CAST} element={<Cast />} />
            <Route path={ROUTES.MOVIE_REVIEWS} element={<Reviews />} />
          </Route>

          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
