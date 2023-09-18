import React from 'react'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');
const ChatContext = React.createContext();

export default ChatContext

export const ChatProvider = ({ children }) => {
  const [username, setUsername] = React.useState('')
  const [room, setRoom] = React.useState('')

  return (
    <ChatContext.Provider value={{
        username, 
        updateName: name => setUsername(name),
        room,
        updateRoom: room => setRoom(room),
        socket
        }}>
      {children}
    </ChatContext.Provider>
  )
}
