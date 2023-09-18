import React, { useEffect } from 'react'
import ChatContext from '../../context/ChatProvider';
import ChatMessage from '../chatMessage';

const Chat = () => {
  const [message, setMessage] = React.useState('');
  const [messageList, setMessageList] = React.useState([]);
  const { socket, room, username } = React.useContext(ChatContext);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  const sendMessage = async () => {
    if (message) {
      const payload = {
        room,
        message,
        username,
        date: new Date(Date.now()).toLocaleDateString('tr') + ' ' + new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      }
      await socket.emit('message', payload);
      setMessageList((prev) => [...prev, payload]);

      setMessage('');
    }
  }
  console.log('liste: ', messageList);
  const getUsernames = () => {
    const usernames = [];
    messageList?.forEach((message) => {
      if (!usernames?.includes(message?.username)) {
        usernames?.push(message?.username);
      }
    });
    return usernames;
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-full h-full bg-white relative'>
        <div className='w-full h-16 flex items-center p-3' style={{ backgroundColor: '#4682A9' }}>
          <div className='w-12 h-12 bg-white rounded-full mr-2'></div>
          {
            getUsernames()?.map((name, i) =>
              name !== username && <div key={i} className='text-white text-sm mr-1'>{name}</div>
            )
          }
        </div>
        <div className='w-full h-4/5 overflow-y-auto p-5'>
        {messageList?.map((msg, i) =>(
          <ChatMessage key={i} message={msg} username={username} />
          ))
        }
         
        </div>
        <div className='absolute bottom-0 left-0 w-full p-5'>
          <input value={message} onChange={(e) => setMessage(e?.target?.value)} className='w-3/4 h-12 border p-2 outline-none' type='text' placeholder='send message' />
          <button onClick={() => sendMessage()} className='w-1/4 text-white h-12 hover:opacity-70' style={{ backgroundColor: '#4682A9' }}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat