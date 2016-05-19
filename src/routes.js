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
    Work,
    Contact,
    About,
    Lucera,
    Alpine,
    Carol,
    NotFound
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>

      { /* Home (main) route */ }
      <IndexRoute component={Home} />

      { /* Routes */ }
      <Route path="work" component={Work} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="work/lucera" component={Lucera} />
      <Route path="work/alpine" component={Alpine} />
      <Route path="work/carol" component={Carol} />


      <Route path="signin" component={Signin} />
      <Route path="signout" component={Signout} />
      <Route path="signup" component={Signup} />

      { /* Protected routes */ }
      <Route path="userprofile" component={RequireAuth(UserProfile)} />

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
