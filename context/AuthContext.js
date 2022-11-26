import { useContext, createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged((user) => {
    // setUser(user);
    // setLoading(false);
    // });
    // return unsubscribe;
  }, []);

  const value = {
    user,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
