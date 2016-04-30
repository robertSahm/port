import React from 'react';
import { IndexRoute, Route } from 'react-router'
import Signin from 'containers/Auth/Signin'
import Signout from 'containers/Auth/Signout'
import Signup from 'containers/Auth/Signup'
import UserProfile from 'containers/UserProfile/UserProfile'
import RequireAuth from 'containers/Auth/RequireAuth'
import {
    App,
    Home,
    NotFound
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      { /* Routes */ }
      <Route path="signin" component={Signin} />
      <Route path="signout" component={Signout} />
      <Route path="signup" component={Signup} />
      <Route path="userprofile" component={RequireAuth(UserProfile)} />
      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
