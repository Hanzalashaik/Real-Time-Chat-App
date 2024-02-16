import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversions from '../../hooks/useGetConversions';
import toast from 'react-hot-toast';

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversions();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at leat 3 characters');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else {
      return toast.error("No such user found!")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="input input-bordered input-accent w-full max-w-xs" />
        <button className="btn btn-circle hover:bg-green-500 hover:text-black">
          <IoSearch className='text-2xl ' />
        </button>
      </form>

    </>
  )
}
