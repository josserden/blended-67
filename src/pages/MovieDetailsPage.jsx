import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrapper } from 'components/PageWrapper';

export const MovieDetailsPage = () => {
  return (
    <PageWrapper>
      <h1>MovieDetailsPage</h1>

      <Outlet />
    </PageWrapper>
  );
};
