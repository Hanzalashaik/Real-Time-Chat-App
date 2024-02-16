import { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../../config.json"

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const token = localStorage.getItem("token");

  const sendMessage = async (message) => {
    setLoading(true);
    // console.log("Message from send message", message);
    try {
      const URL = config.URL
      const response = await axios.post(
        `${URL}/api/messages/send/${selectedConversation._id}`,
        { message },
        {
          headers: {
            "access-token": token,
          },
        }
      );
      const msg = response.data.newMessage;
      setMessages([...messages, msg]);
    } catch (error) {
      console.log(error.response);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}
