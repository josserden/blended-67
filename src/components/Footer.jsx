import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        py: 2,
        borderTop: '1px solid #eaeaea',
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          {new Date().getFullYear()} © The Movie Database
        </Typography>
      </Container>
    </Box>
  );
};
