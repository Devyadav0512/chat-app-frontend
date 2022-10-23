import React from 'react';
import './ChatInput.scss';

function ChatInput() {
    return (  
        <div className='ChatInput'>
        <input onKeyDown={this.props.send} placeholder='Type a message... Hit Enter to send' /> 
        </div>  
    );  
} 

export default ChatInput;