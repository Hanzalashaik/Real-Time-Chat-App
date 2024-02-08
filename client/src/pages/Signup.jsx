import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from "../hooks/useSignup.js"


export default function Signup() {

  const [Inputs, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const handleGenderChange = (event) => {
    const gender = event.target.value;
    setInput({ ...Inputs, gender: gender });
  };
  const { loading, signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Inputs);
    await signup(Inputs)
  }
  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-2xl font-semibold font-inter text-center text-blue-600'>Sign Up
            <span className='text-green-500'> ChatApp</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-1'>
                <span className='text-base label-text'>FullName</span>
              </label>
              <input type="text" placeholder="Hanzala Shaikh" className="input input-bordered input-accent w-full h-10 "
                value={Inputs.fullName}
                onChange={(e) => setInput({ ...Inputs, fullName: e.target.value })}
              />
            </div>

            <div>
              <label className='label p-1'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input type="text" placeholder="hanzalashaikh" className="input input-bordered input-accent w-full h-10"
                value={Inputs.username}
                onChange={(e) => setInput({ ...Inputs, username: e.target.value })}
              />
            </div>

            <div>
              <label className='label p-1'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder="Enter password" className="input input-bordered input-accent w-full h-10"
                value={Inputs.password}
                onChange={(e) => setInput({ ...Inputs, password: e.target.value })}
              />
            </div>

            <div>
              <label className='label p-1'>
                <span className='text-base label-text'>Confirm Password</span>
              </label>
              <input type="password" placeholder="Re-Enter password" className="input input-bordered input-accent w-full h-10"
                value={Inputs.confirmPassword}
                onChange={(e) => setInput({ ...Inputs, confirmPassword: e.target.value })}
              />
            </div>

            <div className='flex mt-2'>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text mr-2">Male</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                    value="male"
                    checked={Inputs.gender === 'male'}
                    onChange={handleGenderChange}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text mr-2">Female</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success border"
                    value="female"
                    checked={Inputs.gender === 'female'}
                    onChange={handleGenderChange}
                  />
                </label>
              </div>
            </div>

            <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an accont?</Link>
            <div className='flex justify-center items-center '>
              <button className='btn btn-sm mt-2 w-40 hover:bg-green-500 hover:text-black hover:duration-200'>Sign Up</button>
            </div>
          </form>
        </div >
      </div >


    </>
  )
}
