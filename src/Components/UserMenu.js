import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../redux/user/user-selectors';
import { logOut } from '../redux/user/user-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <div style={styles.container}>
      <span style={styles.name}>{email} </span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
};
export default UserMenu;
