import React, { useState } from 'react';
import Tweet from './tweet.js';
import "./App.css"

function App() {
  const [users, setUsers] = useState([
    { name: "Lecrae", messages: "Tell the world" },
    { name: "TobyMac", messages: "it ain't over yet" },
    { name: "Denzel", messages: "I walk by faith, not by sight" }
  ]);

  return (
    <div className="app">
      <Tweet name="Trip Lee" messages="To die is gain" />
      <Tweet name="Kevin Hart" messages="I can't make this up" />
      {users.map(user => (
        <Tweet name={user.name} messages={user.messages} />
      ))}
    </div>
  );
}

export default App;