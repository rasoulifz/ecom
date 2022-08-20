import React, { createContext, useEffect, useState , useCallback } from 'react';
let logoutTimer;
const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
const calculateRaminingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuaration = adjExpirationTime - currentTime;
  return remainingDuaration;
};
const retriveStorToken =()=>{
    const storedToken = localStorage.getItem('token');
    const storedExperationDate = localStorage.getItem('expirationTime')
    const remainingTime = calculateRaminingTime(storedExperationDate)
    if (remainingTime<= 3600){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }
    return {
        token :storedToken,
        duration :remainingTime
    }
}
export const AuthContextProvider = (props) => {
    const tokenData = retriveStorToken();
    let initialToken 
    if (tokenData){
        initialToken = tokenData.token
    }
  
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  const logoutHandler =useCallback( () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer){
        clearTimeout(logoutTimer)
    }
  },[])
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    const ramainingTime = calculateRaminingTime(expirationTime)
    logoutTimer = setTimeout (logoutHandler ,ramainingTime )
  };
  useEffect(()=>{
      if (tokenData){
        logoutTimer = setTimeout (logoutHandler ,tokenData.duration )

      }
  },[tokenData] ,logoutHandler )
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
