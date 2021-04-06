// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView';
import LoginView from './Views/LoginView';
import ContactsView from './Views/ContactsView';
import AppBar from './Components/AppBar';

const App = () => {
  //     const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </>
  );
};

export default App;
