import React from 'react'
import Conversation from './Conversation'
import useGetConversions from '../hooks/useGetConversions';

export default function Conversations() {
  const { loading, conversations } = useGetConversions();
  console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}
