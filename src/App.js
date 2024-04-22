import "./App.css";
import { useState } from 'react';
import { useVisible } from './components/useVisible';

function App() {
  const [visibility, toggle] = useVisible(false)
  const user = {
    name: "John",
    email: "john@domain.com",
    username: "johnthedestroyer",
  };

  console.log('NeilTest - visibility', visibility)

  return (
    <div className="account">
      <p>Click to see account information</p>
      {/* Call the function toggle from the useVisible component hook */}
      <button onClick={toggle}>{visibility ? 'Hide' : 'Reveal'}</button>
      {visibility ? 
        <div>

          {/* This is a cool way of mapping over an object */}
          {Object.keys(user).map((key, index) => (
            <p key={key}>{key}: {user[key]}</p>
          ))}
        </div> : <></>}
    </div>
  );
}

export default App;
