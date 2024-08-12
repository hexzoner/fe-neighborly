import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
import { getToken, storeToken } from "./storage.js";

// import { dummyRoster } from "../../utils/temporaryPokemons";
export const AuthProvider = ({ children }) => {
  const loginUrl = "http://localhost:5050/auth/signin";
  const signupUrl = "http://localhost:5050/auth/signup";
  const authMeUrl = "http://localhost:5050/auth/me";
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = getToken();
    console.log("AuthContext.jsx: token: ", token);

    if (token) {
      axios
        .get(authMeUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          //   console.log(res.data);
          setUserInfo(res.data);
        })
        .catch((err) => {
          // console.log(err);
          //   alert(err.message);
        });
    }
  }, []);

  function logout() {
    // console.log("AuthContext - logout");
    storeToken(null);
    setUserInfo(null);
  }

  function signup(userData) {
    //   console.log("AuthContext - logout");
    console.log(userData);
    axios
      .post(signupUrl, userData, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log("Cookies after signup:", document.cookie);
        console.log(res.data);
        storeToken(res.data);
        setUserInfo(userData);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error);
        storeToken(null);
        setUserInfo(null);
      });
  }

  function login(login, password) {
    // console.log({ login, password });
    axios
      .post(loginUrl, { email: login, password })
      .then((res) => {
        console.log(res.data);
        // console.log("Cookies after signup:", document.cookie);
        storeToken(res.data.token);
        setUserInfo(res.data.user);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error);
        storeToken(null);
        setUserInfo(null);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        login,
        logout,
        signup,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
