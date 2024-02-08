import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        <h1 className='text-2xl font-semibold font-inter text-center text-gray-900'>Login
          <span className='text-green-500'> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered input-accent w-full h-10 " />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered input-accent w-full h-10" />
          </div>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an accont?</a>

          <div className='flex justify-center items-center '>
            <button className='btn btn-sm mt-2 w-40 hover:bg-green-500 hover:text-black hover:duration-200'>Login</button>
          </div>
        </form>

      </div>
    </div>
  )
}
