import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { getToken, setIntendedUrl, setToken } from '../utils/auth';

const AuthContext = React.createContext();

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};


function AuthProvider ({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(`currentUser`, currentUser)
  const authenticated = useMemo(() => !!currentUser, [currentUser]);

  const initAuth = () => {
    const access_token = getToken();
    // console.log('asdddddddd',access_token);
    return getToken()
      ? axios.get('/profile/view', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      : Promise.resolve(null);
  };

  useEffect(() => {
    initAuth().then((user) => {
      // console.log(`user>>>INIT:`, user)
      setCurrentUser(user);
      setInitializing(false);
    }).catch(error=>{ 
      console.log('get user error');
    console.log(`error`, error)
      setInitializing(false);
      // setCurrentUser({});
      setToken('');
      setIntendedUrl('/login');
     });;
  }, []);

  return (
    <AuthContext.Provider value={{
      initializing,
      authenticated,
      currentUser,
      setToken,
      setCurrentUser }
    }> { children }
    </AuthContext.Provider>
  );
}

function useAuth () {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}

export { AuthProvider, useAuth };

