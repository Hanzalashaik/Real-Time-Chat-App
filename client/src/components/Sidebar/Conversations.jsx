import React from 'react';
import Conversation from './Conversation';
import useGetConversions from '../../hooks/useGetConversions';
import generateRandomEmoji from '../../../utils/emojis.js';

export default function Conversations() {
  const { loading, conversations } = useGetConversions();
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={generateRandomEmoji()}
          lastIndex={index === conversation.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
}
