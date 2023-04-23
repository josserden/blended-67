import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { ROUTES } from 'utils/routes';

export const MoviesList = ({ movies = [] }) => {
  return (
    <List>
      {movies.map(({ title, id }) => (
        <ListItem key={id}>
          <Link to={`${ROUTES.MOVIES}/${id}`}>
            <ListItemText>{title}</ListItemText>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
