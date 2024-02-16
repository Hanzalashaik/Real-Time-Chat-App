import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function useGetConversions() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);

  useEffect(() => {
    const getconversion = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://192.168.0.99:5031/api/users", {
          headers: {
            "access-token": token,
          },
        });

        // console.log("users", response);
        setConversation(response.data);
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
