import React, {Component} from 'react';
import './ChatHistory.scss';
import Message from '../Message/Message';

function ChatHistory(props) {
    // Can be a bug
    console.log(this.props.ChatHistory)
    this.props.chatHistory.map(msg=>{<Message key={msg.timestamp} message={msg.data}/>})
    return (  
        <div>
            <h2>Chat History</h2>
            {messages}
        </div>
    );  
} 

export default ChatHistory;