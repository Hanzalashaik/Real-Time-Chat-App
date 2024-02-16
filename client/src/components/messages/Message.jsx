import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../../utils/extractTime.js";
import useConversation from "../../zustand/useConversation.js";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	let fromMe = message.senderId === authUser._id;

	const formattedTime = extractTime(message.createdAt);
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const chatClassName = `chat ${fromMe ? "chat-end" : "chat-start"}`;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
	const shakeClass = message.shouldShake ? "shake" : "";


	return (
		<div className={`${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Chat profile' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
				{message.message}
			</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
				{formattedTime}
			</div>
		</div>
	);
};
export default Message;