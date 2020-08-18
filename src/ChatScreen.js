import React, { useState } from 'react'
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';

const ChatScreen = () => {
  const initialState = [{
    name: "Garbage",
    image: "https://bloximages.chicago2.vip.townnews.com/host.madison.com/content/tncms/assets/v3/editorial/c/65/c656c6de-e913-11df-b2a3-001cc4c002e0/4fcc961a97dd8.image.jpg",
    message: "how you doing?"
  },
  {
    name: "Garbage",
    image: "https://bloximages.chicago2.vip.townnews.com/host.madison.com/content/tncms/assets/v3/editorial/c/65/c656c6de-e913-11df-b2a3-001cc4c002e0/4fcc961a97dd8.image.jpg",
    message: "would you like come to ours concert?"
  },
  {
    message: "sure, I'd love to go"
  }]
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialState);
  
  const handleInput = e => {
    setInput(e.target.value)
  }
  
  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput("");
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH GARBAGE ON 17/08/2020</p>
      {messages.map(message => (
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      ))}
      <div>
        <form  className="chatScreen__input">
          <input 
            value={input}
            onChange={handleInput}
            className="chatScreen__inputField" 
            placeholder="Type a message..."
            type="text"
          />
          <button 
            onClick={handleSend} 
            type="submit" 
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen;
