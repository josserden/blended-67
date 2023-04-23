import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Box
        as="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};
