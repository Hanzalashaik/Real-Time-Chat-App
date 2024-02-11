import axios from "axios";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import { eraseCookie } from "../../utils/utility.js";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.99:5031/api/auth/logout"
      );

      console.log(response);
      toast.success(response.data.success);
      eraseCookie("jwt");
      localStorage.clear();
      setAuthUser(null);
    } catch (error) {
      toast.error(error.response.data.success);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
}
