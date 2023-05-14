import { useDispatch } from 'react-redux';
import { clsx } from 'clsx';
import { toggleFollow } from 'redux/services';
import './components.css';

export default function UserItem({ user }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(toggleFollow(user));

  return (
    <>
      <p className="name">{user.name}</p>
      <img className="avatar" src={user.avatar} alt={user.name} />
      <div className="circle"></div>
      <div className="line"></div>
      <div className="statistics">
        <p className="tweets">{user.tweets} tweets</p>
        <p className="followers">
          {user.followers.toLocaleString('en-US')} followers
        </p>
        <button
          className={clsx('button_follow', { following: user.isFolowing })}
          onClick={handleClick}
        >
          {user.isFolowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </>
  );
}
