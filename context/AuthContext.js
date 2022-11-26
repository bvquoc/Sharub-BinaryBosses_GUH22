import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/clientApp';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserData(user);
    });
    return () => unsubscribe;
  }, [userData]);

  const value = {
    userData,
    setUserData,
  };

  const router = useRouter();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
