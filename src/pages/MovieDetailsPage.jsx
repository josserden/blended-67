import { Outlet } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

import { Loader } from 'components/Loader';
import { PageWrapper } from 'components/PageWrapper';
import { Title } from 'components/Title';
import { useGetMovieDetail } from 'hooks/useGetMovieDetail';

export const MovieDetailsPage = () => {
  const { isError, isLoading, movie } = useGetMovieDetail();

  if (isError)
    return (
      <Alert severity="error">Something went wrong. Try again later.</Alert>
    );

  if (isLoading) return <Loader />;

  console.log(movie);

  return (
    <PageWrapper>
      <Title content={movie?.title} />
      <Typography
        variant="subtitle1"
        component="p"
        gutterBottom
        sx={{
          color: 'gray',
          fontSize: '1.2rem',
        }}
      >
        {movie.overview}
      </Typography>

      <Outlet />
    </PageWrapper>
  );
};
