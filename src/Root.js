import React, { Component } from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as reducers from './reducers/reducers';

import history from './history';
import './Root.sass';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ScannerDashboard from './components/ScannerDashboard';
import Home from './components/Home';
import SearchBarResults from './components/SearchBarResults';
import LibraryDashboard from './components/LibraryDashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import Rate from './components/Rate'

class Root extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {

    const { isAuthenticated } = this.props;

    return (
      <Router history={history}>
        <div className='App_loginUser'>
          <div>
            <Switch>
              <Redirect exact path='/' to={isAuthenticated ? '/home' : '/signup'}></Redirect>
              <PrivateRoute exact path="/login" component={Login} display={!isAuthenticated} redirect='/home' />
              <PrivateRoute exact path="/signup" component={Signup} display={!isAuthenticated} redirect='/home' />
              <PrivateRoute exact path="/home" component={Home} display={isAuthenticated} redirect='/login' />
              <PrivateRoute exact path="/rate" component={Rate} display={isAuthenticated} redirect='/login' />
              <PrivateRoute exact path="/scannerdashboard" component={ScannerDashboard} display={isAuthenticated} redirect='/login' />
              <PrivateRoute exact path="/searchbarres" component={SearchBarResults} display={isAuthenticated} redirect='/login' />
              <PrivateRoute exact path="/library" component={LibraryDashboard} display={isAuthenticated} redirect='/login' />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  isAuthenticated: reducers.isAuthenticated(state)
})

const mapDispatchToProps = dispatch => ({
});

export default connect (mapStateToProps, mapDispatchToProps)(Root);
