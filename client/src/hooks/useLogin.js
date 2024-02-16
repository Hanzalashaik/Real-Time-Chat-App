import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext.jsx";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setauthUser } = useAuthContext();

  //Login Fucntion
  const login = async (username, password) => {
    const success = handleInputErrors({
      username,
      password,
    });

    if (!success) return;
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.99:5031/api/auth/login",
        {
          username,
          password,
        }
      );
      // console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setauthUser(response.data);

      const jwtsignToken = response.data.token;
      localStorage.setItem("token", jwtsignToken);

      // console.log("Login", response);
      toast.success(response.data.success);
    } catch (error) {
      console.error(error.response.data.success);
      toast.error(error.response.data.success);
    } finally {
      setLoading(false);
    }
  };
  //   const login = async (username, password) => {
  //     const success = handleInputErrors({
  //       username,
  //       password,
  //     });

  //     if (!success) return;
  //     setLoading(true);
  //     try {
  //       const response = await axios.post('http://192.168.0.99:5031/api/auth/login', {
  //         username,
  //         password,
  //       });
  //       console.log(response.data);
  //       setauthUser(response.data);
  //       toast.success("Login successful");

  //       // Set cookie directly without a package
  //       document.cookie = `jwt=${response.data.token}; path=/; Secure; SameSite=Strict`;

  //       // Optional: Adjust cookie attributes such as expiration, domain, etc. as needed
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Login failed");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  return { loading, login };
}

const handleInputErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }
  return true;
};
