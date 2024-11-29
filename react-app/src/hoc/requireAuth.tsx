import React from 'react';
import Home from '../components/Home';

const requireAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const isLoggedIn = localStorage.getItem('auth') === 'true'; 

    if (!isLoggedIn) {
      return <Home/>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default requireAuth;
