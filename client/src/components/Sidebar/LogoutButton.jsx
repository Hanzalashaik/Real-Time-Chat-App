import React from 'react'
import { BiLogOut } from "react-icons/bi";
export default function LogoutButton() {
  return (
    <div className='mt-auto w-9 h-10 p-1 flex items-center rounded-full hover:bg-green-500 hover:text-black  cursor-pointer'>
      <BiLogOut className='text-2xl' />
    </div>
  )
}
