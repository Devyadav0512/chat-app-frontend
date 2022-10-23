import React, {Component} from 'react';
import './Message.scss';

function Message(props) {
    // Can be a bug
    const [message, setMessage] = useState({});

    let temp = JSON.parse(this.props.message);
    setMessage(temp);

    return (  
        <div className='Message'>
            {message.body}
        </div>  
    );  
} 

export default Message;