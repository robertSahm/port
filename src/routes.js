import React from 'react';
import { IndexRoute, Route } from 'react-router'
import Signin from 'containers/Auth/Signin'
import Signout from 'containers/Auth/Signout'
import Signup from 'containers/Auth/Signup'
import UserProfile from 'containers/UserProfile/UserProfile'
import RequireAuth from 'containers/Auth/RequireAuth'
import {
    About,
    Alpine,
    App,
    Carol,
    Contact,
    Home,
    Lucera,
    NotFound,
    Work, 
    Resume
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>

      {/* Main route */}
      <IndexRoute component={Home} />

      {/* Routes */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/alpine" component={Alpine} />
      <Route path="/lucera" component={Lucera} />
      <Route path="/carol" component={Carol} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
