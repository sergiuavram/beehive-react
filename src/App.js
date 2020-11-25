import React from 'react';
import './App.css';

import { Switch, Route, } from "react-router-dom";

import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import LoggedOut from './pages/logged-out/logged-out.component';
import Login from './pages/login/login.component';
import Signup from './pages/signup/signup.component';
import Hives from './pages/hives/hives.component';
import Hive from './pages/hive/hive.component';

function App({ user }) {
  // console.log('user', user)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/logged-out/' render={() => <LoggedOut />} />
        <Route exact path='/login/' render={() => <Login />} />
        <Route exact path='/signup/' render={() => <Signup />} />
        <Route exact path='/hives/' render={() => <Hives />} />
        <Route exact path='/hive/:hive_name' render={() => <Hive />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
})

export default connect(mapStateToProps)(App);
