import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from 'redux/pageSlice';
import { ChevronsLeft } from 'react-feather';
import { selectTotal, selectPage } from 'redux/selectors';
import { fetchUsers } from 'redux/services';
import UsersList from 'components/UsersList';

const Tweets = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const location = useLocation();
  const backlink = useRef(location.state?.from ?? '/');
  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    color: '#030303',
    textDecoration: 'none',
    margin: '0 10px',
  };
  const addUsers = () => {
    dispatch(fetchUsers(page));
    dispatch(setPage());
  };

  return (
    <div>
      <Link to={backlink.current} style={linkStyles}>
        <ChevronsLeft strokeWidth={1} />
        <span style={{ fontSize: '18px' }}>Go Back</span>
      </Link>
      <h2 className="heading">Tweets Page</h2>
      <UsersList />
      {page <= totalPages && (
        <button className="button_load" onClick={() => addUsers()}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Tweets;
