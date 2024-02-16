import React, { useEffect, useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

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
        const response = await axios.get(
          `http://192.168.0.99:5031/api/messages/${selectedConversation._id}`,
          {
            headers: {
              "access-token": token,
            },
          }
        );

        console.log(response.data);
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
