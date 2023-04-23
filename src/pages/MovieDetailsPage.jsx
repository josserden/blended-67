import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrapper } from 'components/PageWrapper';
import { Title } from 'components/Title';

export const MovieDetailsPage = () => {
  return (
    <PageWrapper>
      <Title content={'Movie Details Page'} />

      <Outlet />
    </PageWrapper>
  );
};
