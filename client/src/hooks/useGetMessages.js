import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";
import axios from "axios";

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://192.168.0.99:5031/api/messages/${selectedConversation?._id}`,
          {
            headers: {
              "access-token": token,
            },
          }
        );

        console.log(response.data);
        setMessages(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Falied to get messages! Try after some time.");
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
}
