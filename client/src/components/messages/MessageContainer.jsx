import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";

export default function MessageContainer() {
  let noChatSelceted = false
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSelceted ? <NoChatSelceted /> : (
        <>
          <div className='bg-slate-600 px-4 py-2 mb-2 '>
            <span className='label-text '>To:</span> <span className='text-gray-900 font-bold '>Nadeem</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}


const NoChatSelceted = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='px-2 sm:text-lg text-center  md:text-xl text-gray-200 font-semibold flex flex-col items-center'>
        <p className='flex'><p className='text-red-500'>Welcome</p> 👋🏼 Hanzala</p>
        <p>Select a chat to start messaging</p>
        <LuMessagesSquare className='text-3xl md:text-6xl mt-3 text-green-500' />
      </div>
    </div>
  )
}