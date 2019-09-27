import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import Login from './Login/';
// import SignUp from './SignUp/';
// import PasswordRecovery from './PasswordRecovery/';
import Landing from '../pages/Landing';
import appHistory from '../history';

function Public () {
  return (
    <BrowserRouter history={appHistory}>
      <main>
        <Route path="/" exact component={Landing} />
        {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
      </main>
    </BrowserRouter>
  );
}

export default Public;