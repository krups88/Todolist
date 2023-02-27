import React from 'react';
import './App.css';
import Todolist from './Todolist';

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}


function App(): JSX.Element {
    const tasks: TaskType[] = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false}
    ]

    return (


        <div className="App">
            <Todolist title={"What to buy"} tasks={tasks} />
            <Todolist title={"How are you"} tasks={tasks}/>
            <Todolist title={"yo"} tasks={tasks}/>
            <Todolist title={"Kamasutra It"} tasks={tasks}/>
        </div>
    );
}

export default App;
