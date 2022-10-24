import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';

import {connect, sendMsg} from './api';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  function send(e) {
    if (e.keyCode === 13) {
      sendMsg(e.target.value);
      e.target.value = "";
    }
  }

  useEffect(() => {
    connect((msg) => {
        console.log("New Message!!",msg)
        setChatHistory([...chatHistory,msg]);
    });
  });

  return (  
      <div className='App'>
        <Header/>
        <ChatHistory chatHistory = {chatHistory} />
        <ChatInput send={send}/>
      </div>  
  );  
}

export default App;
