import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    let { message } = req.body;
    let receiverId = req.params.id;
    console.log(receiverId);
    let senderId = req.user._id;
    console.log(senderId);

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

    //SOCKET IO FUNCTIONALITY

    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error from sendMessages controller", error);
    res.status(500).json({ sucess: "Internal server error" });
  }
};
