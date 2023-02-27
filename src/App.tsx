import React from 'react';
import './App.css';
import Todolist from './Todolist';




function App(): JSX.Element {
    return (
        <div className="App">
            <Todolist title={"What to buy"} />
            <Todolist title={"How are you"} />
            <Todolist title={"yo"} />
            <Todolist title={"Kamasutra It"} />
        </div>
    );
}

export default App;
