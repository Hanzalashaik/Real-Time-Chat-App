import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
export default function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto w-9 h-11 p-1 flex items-center rounded-full hover:bg-green-500 hover:text-black  cursor-pointer'>
      {!loading ? (<BiLogOut onClick={logout} className='text-2xl' />) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}