import React, { useState } from 'react';
import './Message.css';

function Message(props) {
    const [message] = useState(JSON.parse(props.message));

    return (  
        <div className='Message'>
            {message.body}
        </div>  
    );  
} 

export default Message;