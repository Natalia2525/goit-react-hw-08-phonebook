import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAunteficated } from '../redux/user/user-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

 const AppBar = () => {
  const IsAunteficated = useSelector(getIsAunteficated);
  return (
    <header style={styles.header}>
      <Navigation />
      {IsAunteficated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
export default AppBar;