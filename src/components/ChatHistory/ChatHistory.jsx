import React from 'react';
import './ChatHistory.css';
import Message from '../Message/Message';

function ChatHistory(props) {
    
    const messages = props.chatHistory.map(msg => <Message key={msg.timestamp} message={msg.data}/>)

    return (  
        <div>
            <h2>Chat History</h2>
            {messages}
        </div>
    );  
} 

export default ChatHistory;