import React from 'react'
import avatar from "../../assets/avatar1.svg";
export default function Message() {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={avatar} alt="chat image avatar" />
                </div>
            </div>
            <div className='chat-bubble text-white bg-blue-500'>Hi What's Up</div>
            <div className='chat-footer opacity-50 text-sm flex gap-1 items-center'>12:25</div>
        </div>
    )
}
