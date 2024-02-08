import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <>
      <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className="input input-bordered input-accent w-full max-w-xs" />
        <button className="btn btn-circle hover:bg-green-500 hover:text-black">
          <IoSearch className='text-2xl ' />
        </button>
      </form>

    </>
  )
}
