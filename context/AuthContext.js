import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/clientApp';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
      console.log(userData);
    });
    return () => unsubscribe;
  }, [userData]);

  const value = {
    userData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
