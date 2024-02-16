import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

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
      const response = await axios.post(
        `http://192.168.0.99:5031/api/auth/signup`,
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }
      );

      //console.log(response.data.success);
      toast.success(response.data.success);

      //set it to the local storage
      localStorage.setItem("user", JSON.stringify(response.data));
      setauthUser(response.data);

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
