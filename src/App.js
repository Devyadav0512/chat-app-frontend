import React, { useState } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';

import {connect, sendMsg} from './api';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    connect((msg) => {
        console.log("New Message!!")
        // Can be a bug
        setChatHistory([...chatHistory,msg])
        console.log(chatHistory)
    });
  }, []);
  return (  
      <div className='App'>
        <Header/>
        <ChatHistory chatHistory = {chatHistory} />
        {/* Can be a bug */}
        <ChatInput send={this.send}/>
      </div>  
  );  
}

export default App;
