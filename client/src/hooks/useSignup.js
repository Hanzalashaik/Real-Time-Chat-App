import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import config from "../../config.json"

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setauthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);

    try {
      const URL = config.URL
      const response = await axios.post(
        `${URL}/api/auth/signup`,
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      setauthUser(response.data);

      const jwtsignToken = response.data.token;
      localStorage.setItem("token", jwtsignToken);

      toast.success(response.data.success);
      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      toast.error(error.response.data.success);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
}

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password don't match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
