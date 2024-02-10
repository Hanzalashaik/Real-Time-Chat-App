import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export default function useGetConversions() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);

  useEffect(() => {
    const getconversion = async () => {
      setLoading(true);
      
      try {
        const response = await axios("http://192.168.0.99:5031/api/users");
        console.log(response);
        setConversation(response);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.success);
      } finally {
        setLoading(false);
      }
    };

    getconversion();
  }, []);

  return { loading, conversations };
}
