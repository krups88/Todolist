import React from "react";
import {FilterValuesType} from "./App";

export  type TodolistsPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


export function Todolists(props: TodolistsPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        return (
                            <li><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                                <button onClick={() => props.removeTask(t.id)}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter("all")
                }}> All
                </button>
                <button onClick={() => {
                    props.changeFilter("active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter("Completed")
                }}>Completed
                </button>
            </div>
        </div>
    )
}