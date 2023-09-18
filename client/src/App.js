import './App.css';
import Room from './components/enter-room';
import Chat from './components/chat';
import { ChatProvider } from './context/ChatProvider';
import React from 'react';

function App() {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <ChatProvider>
    <div className="App">
    {
      isLogin ? <Chat /> : <Room setIsLogin={setIsLogin}/>
    }
    </div>
    </ChatProvider>
  );
}

export default App;
