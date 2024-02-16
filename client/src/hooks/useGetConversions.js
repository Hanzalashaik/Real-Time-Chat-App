import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import config from "../../config.json"

export default function useGetConversions() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversation] = useState([]);

  useEffect(() => {
    const getconversion = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const URL = config.URL
        const response = await axios.get(
          `${URL}/api/users`,
          {
            headers: {
              "access-token": token,
            },
          }
        );

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
