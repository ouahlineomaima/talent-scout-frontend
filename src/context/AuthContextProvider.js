import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import { GET_CURRENT_RECRUITER } from '../graphql/AuthenticationMutations';
import { useQuery } from '@apollo/client';


const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('auth-token'));
  const [isAuthenticated, setIsAuthenticated] = useState(token !== '' && token !== null);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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

  useEffect(() => {
    const onStorageChange = (event) => {
      if (event.key === 'auth-token') {
        const updatedToken = event.newValue;
        setToken(updatedToken);
        setIsAuthenticated(updatedToken !== '' && updatedToken !== null);
      }
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  const { loading, data } = useQuery(GET_CURRENT_RECRUITER, {
    variables: { token },
    skip: !token, // Skip the query if there's no token
  });

  useEffect(() =>{
    if (!loading && data && data.currentRecruiter) {
      setUser(data.currentRecruiter);
    }

  }, [loading, data, token])

  return (

    <AuthContext.Provider value={{ token, isAuthenticated, user, setUser, login, logout, theme, switchTheme}}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContextProvider;

