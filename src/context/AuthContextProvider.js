import React, { useState, useEffect, useContext } from 'react';
import AuthContext from './AuthContext';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_RECRUITER } from '../graphql/AuthenticationMutations';

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('auth-token'));
  const [isAuthenticated, setIsAuthenticated] = useState(token !== '' && token !== null);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [permissionsGranted, setPermissionsGranted] = useState(localStorage.getItem('permissions-granted') != null ? localStorage.getItem('permissions-granted') : false)

  const login = (newToken) => {
    setToken(newToken);
    setIsAuthenticated(true);
    localStorage.setItem('auth-token', newToken);
  };

  const logout = () => {
    setToken('');
    setIsAuthenticated(false);
    localStorage.removeItem('auth-token');
  };

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const grantPermission = ()=>{
    setPermissionsGranted(true);
    localStorage.setItem('permissions-granted', true)
  }

  // Fetch current recruiter data when the token changes
  const { loading, data, refetch } = useQuery(GET_CURRENT_RECRUITER, {
    variables: { token },
    skip: !token, // Skip the query if there's no token
  });

  useEffect(() => {
    if (!loading && data && data.currentRecruiter) {
      setUser(data.currentRecruiter);
    }
    else{
      refetch()
    }
    console.log(user, data, loading)
  }, [loading, data, token]);

  useEffect(() => {
    const onStorageChange = (event) => {
      if (event.key === 'auth-token') {
        const updatedToken = event.newValue;
        setToken(updatedToken);
        setIsAuthenticated(updatedToken !== '' && updatedToken !== null);
      }
      if (event.key === 'permissions-granted') {
        const updatedPermission = event.newValue;
        setPermissionsGranted(updatedPermission);
      }
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, user, setUser, login, logout, theme, switchTheme, grantPermission, permissionsGranted }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
