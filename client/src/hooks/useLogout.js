import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";
import config from "../../config.json"

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setauthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    const URL = config.URL
    try {
      const response = await axios.post(
        `${URL}/api/auth/logout`
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
