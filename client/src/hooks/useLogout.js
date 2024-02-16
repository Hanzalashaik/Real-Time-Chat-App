import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setauthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.99:5031/api/auth/logout"
      );

      // console.log(response);
      toast.success(response.data.success);
      localStorage.clear();
      setauthUser(null);
    } catch (error) {
      toast.error(error.response.data.success);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
}
