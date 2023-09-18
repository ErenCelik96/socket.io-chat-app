import React from 'react'
import ChatContext from '../../context/ChatProvider'

const Room = ({setIsLogin}) => {
  const { updateName, updateRoom, username, room, socket } = React.useContext(ChatContext);
  const sendRoom = () => {
    socket.emit('join_room', room);
    setIsLogin(!!(username && room))
  }
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-80 h-[350px] rounded-lg flex flex-col space-y-4 p-3' style={{ backgroundColor: '#4682A9' }}>
        <h1 className='font-bold text-2xl text-center text-white mb-5'>Welcome !</h1>
        <input onChange={e => updateName(e?.target?.value)} className='h-12 rounded-xl p-3' type='text' placeholder='Username' />
        <input onChange={e => updateRoom(e?.target?.value)} className='h-12 rounded-xl p-3' type='number' placeholder='Room' />
        <button
          onClick={() => sendRoom()}
          className='tracking-wider hover:opacity-70 cursor-pointer text-white h-12 text-xl text-center rounded-lg'
          style={{ backgroundColor: '#91C8E4' }}
        >
          Join!
        </button>
      </div>
    </div>
  )
}

export default Room