import React, { useState } from 'react';
import './App.css'

function Tweet(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.messages}</p>
            <button onClick={increment}>Like</button>
            <h3>{count}</h3>
        </div>
    );
}
export default Tweet;