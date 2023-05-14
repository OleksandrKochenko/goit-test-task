import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import UserItem from './UserItem';
import './components.css';

export default function UsersList() {
  const users = useSelector(selectUsers);
  return (
    <ul className="users_list">
      {users.map(item => {
        return (
          <li className="user_item" key={item.id}>
            <UserItem user={item} />
          </li>
        );
      })}
    </ul>
  );
}
