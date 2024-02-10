import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        <h1 className='text-2xl font-semibold font-inter text-center text-blue-600'>Login
          <span className='text-green-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} className="input input-bordered input-accent w-full h-10 " />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered input-accent w-full h-10" />
          </div>

          <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an accont?</Link>

          <div className='flex justify-center items-center '>
            <button className='btn btn-sm mt-2 w-40 hover:bg-green-500 hover:text-black hover:duration-200' disabled={loading}>{loading ? <span className='loading loading-spinner'></span> : "Login"}</button>
          </div>
        </form>

      </div>
    </div>
  )
}
