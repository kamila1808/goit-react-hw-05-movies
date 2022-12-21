import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Header, Main, Footer, P } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer><P>Copyright © 2022 GoIT. Created by Kamila Nauryzbayeva.</P></Footer>
    </>
  );
};
