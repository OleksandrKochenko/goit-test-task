import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
import { fetchUsers } from 'redux/services';
import { selectPage } from 'redux/selectors';
import { setPage } from 'redux/pageSlice';
import { Loader } from './LoaderModal';
import { selectIsLoading } from 'redux/selectors';

const Home = lazy(() => import('../pages/home'));
const Tweets = lazy(() => import('../pages/tweets'));

export const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    if (page > 1) {
      return;
    }
    dispatch(fetchUsers(page));
    dispatch(setPage());
  }, [dispatch, page]);

  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
};
