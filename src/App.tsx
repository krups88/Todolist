import React, {useState} from "react";
import "./App.css";
import {TaskType, Todolists} from "./Todolists";


export type FilterValuesType = "all" | "active" | "Completed"

function App() {

    let [tasks1, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "JAVA", isDone: false},
        {id: 4, title: "JA", isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(id: number) {
        let filteredTasks = tasks1.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }


    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    let tasksForTodolist = tasks1;
    if (filter === "Completed") {
        tasksForTodolist = tasks1.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks1.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolists
                title={"What to learn"}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}/>

        </div>
    );
}

export default App;


