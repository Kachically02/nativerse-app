
import { createContext, useLayoutEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  // const authState = localStorage.getItem("auth");
  const [auth, setAuthState] = useState(null);

  const setAuth = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuthState(data);
  };

  const clearAuth = () => {
    localStorage.clear();
    setAuthState({});
  };

  useLayoutEffect(() => {
    const authState = localStorage.getItem("auth");
    setAuth(authState ? JSON.parse(authState) : {});
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider

