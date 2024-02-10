import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    const success = handleInputErrors({
      username,
      password,
    });

    if (!success) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `http://192.168.0.99:5031/api/auth/login`,
        {
          username,
          password,
        }
      );

      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setAuthUser(response.data);
      toast.success(response.data.success);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.success);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
}

const handleInputErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }
  return true;
};
