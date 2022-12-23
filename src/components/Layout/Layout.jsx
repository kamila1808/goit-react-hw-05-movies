import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Header, Main, Footer, P } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
        <Main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
          </Suspense>
        </Main>
      <Footer>
        <P>Copyright © 2022 GoIT. Created by Kamila Nauryzbayeva.</P>
      </Footer>
    </>
  );
};
