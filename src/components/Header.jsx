import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ROUTES } from 'utils/routes';

const pages = [
  {
    name: 'home',
    path: ROUTES.HOME,
  },
  {
    name: 'movies',
    path: ROUTES.MOVIES,
  },
];

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          <Typography variant="p" noWrap>
            <LocalMoviesIcon
              style={{
                color: 'yellow',
                fontSize: '3rem',
              }}
            />
          </Typography>

          <Box
            as="nav"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {pages.map(({ name, path }) => (
              <Button
                component={NavLink}
                to={path}
                exact="true"
                key={name}
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1rem',

                  '&.active': {
                    color: 'yellow',
                    textDecoration: 'underline',
                  },
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
