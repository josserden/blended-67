import * as MovieService from 'services/api';

MovieService.getSearchMovie('fight');
MovieService.getTrendingMovies();
MovieService.getMovieDetails(345);
MovieService.getMovieActors(344);
MovieService.getMovieReviews(346);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
