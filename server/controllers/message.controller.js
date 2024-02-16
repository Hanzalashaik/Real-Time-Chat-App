import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    let { message } = req.body;
    // console.log("message from controller",message);
    let { id: receiverId } = req.params;
    // console.log(receiverId);
    let senderId = req.user._id;
    // console.log(senderId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    let newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCKET IO FUNCTIONALITY
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error from sendMessages controller", error);
    res.status(500).json({ sucess: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    let { id: userToChatId } = req.params;
    let senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //not refrence but acutal messages

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error from getMessages controller", error);
    res.status(500).json({ sucess: "Internal server error" });
  }
};
