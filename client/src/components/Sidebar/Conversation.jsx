import React from 'react';
import avatar from "../../assets/avatar1.svg";
import "../css/CustomScrollbar.css"; // Import custom CSS for scrollbar styling

export default function Conversation() {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-green-600 rounded p-2 py-1 cursor-pointer scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-600 scrollbar-track-green-300'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={avatar} alt="image" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>Hanzala</p>
                        <span className='text-xl'>🚀</span>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1' />
        </>
    );
}
