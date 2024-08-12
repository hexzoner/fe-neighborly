import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
import { getToken, storeToken } from "./storage.js";

// import { dummyRoster } from "../../utils/temporaryPokemons";
export const AuthProvider = ({ children }) => {
  const loginUrl = "http://localhost:5050/auth/signin";
  const signupUrl = "http://localhost:5050/auth/signup";
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = getToken();
    console.log("AuthContext.jsx: token: ", token);

    if (token) {
      axios
        .get("http://localhost:5050/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
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
        console.log("Cookies after signup:", document.cookie);
        // console.log(res.cookies);
        // storeToken(res.data.token);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function login(email, password) {
    // console.log("AuthContext - login");
    console.log({ email, password });
    // storeToken("eyJ");
    // setUserInfo({ email, password });

    axios
      .post(
        loginUrl,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log("Cookies after signup:", document.cookie);
        // storeToken(res.data.token);
        // setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
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
