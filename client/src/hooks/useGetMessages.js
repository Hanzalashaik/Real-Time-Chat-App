import React, { useEffect, useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import config from "../../config.json"

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) {
        return;
      }
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const URL = config.URL
        const response = await axios.get(
          `${URL}/api/messages/${selectedConversation._id}`, // Corrected: Added backticks for template string
          {
            headers: {
              "access-token": token,
            },
          }
        );

        // console.log(response.data);
        setMessages(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to get messages! Try after some time.");
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
}
