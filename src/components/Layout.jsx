import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Loader } from './LoaderModal';
import { selectIsLoading, selectError } from 'redux/selectors';

const StyledLink = styled(NavLink)`
  color: #030303;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;

  &.active {
    color: #471ca9;
  }
`;

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <header>
        <nav className="menu">
          <StyledLink style={{ margin: '0 10px 0 0' }} to="/">
            Home
          </StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </nav>
      </header>
      <hr />
      <main>
        <Suspense fallback={<>{isLoading && !error && <Loader />}</>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
