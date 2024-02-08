import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import MessageContainer from "../components/messages/MessageContainer.jsx"

export default function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[470px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}
