import { useGetTrendingMovies } from 'hooks/useGetTrendingMovies';

import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { PageWrapper } from 'components/PageWrapper';
import { Title } from 'components/Title';

export const HomePage = () => {
  const { isError, isLoading, hasFilms, movies } = useGetTrendingMovies();

  if (isError) {
    return (
      <PageWrapper>
        <p>Something went wrong. Try again later.</p>
      </PageWrapper>
    );
  }

  if (isLoading) return <Loader />;

  return (
    <PageWrapper>
      <Title content={'Trending movies'} />

      {hasFilms && <MoviesList movies={movies} />}
    </PageWrapper>
  );
};
