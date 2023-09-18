import React from 'react'

const Room = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-1/3 h-[350px] rounded-lg bg-indigo-600 flex flex-col space-y-4 p-3'>
        <h1 className='font-bold text-2xl text-center text-white mb-5'>Welcome To Chat</h1>
        <input className='h-12 rounded-xl p-3 outline-none' type='text' placeholder='Username'/>
        <input className='h-12 rounded-xl p-3 outline-none' type='text' placeholder='Room'/>
        <button className='tracking-wider hover:opacity-70 cursor-pointer bg-indigo-900 text-white h-12 text-xl text-center rounded-lg'>Join!</button>
      </div>
    </div>
  )
}

export default Room