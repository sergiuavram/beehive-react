import React, { useEffect } from 'react';
import './App.css';

import { Switch, Route, } from "react-router-dom";

import { connect } from 'react-redux';
import { checkLocalStorage } from './redux/user/user.action';

import HomePage from './pages/homepage/homepage.component';
import LoggedOut from './pages/logged-out/logged-out.component';
import Login from './pages/login/login.component';
import Signup from './pages/signup/signup.component';
import Hives from './pages/hives/hives.component';
import Hive from './pages/hive/hive.component';
import Error404 from './pages/404/404.component';

const App = ({ user, checkLocalStorage }) => {
  useEffect(() => {
    checkLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/logged-out/' render={() => <LoggedOut />} />
        <Route exact path='/login/' render={() => <Login />} />
        <Route exact path='/signup/' render={() => <Signup />} />
        <Route exact path='/hives/' render={() => <Hives />} />
        {/* <Route exact path='/hives/:hive_name' render={() => <Hive />} /> */}
        <Route exact path='/hives/:hive_id' render={() => <Hive />} />
        <Route path='*' render={() => <Error404 />} />
      </Switch>
    </div>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = (dispatch) => ({
  checkLocalStorage: () => dispatch(checkLocalStorage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
