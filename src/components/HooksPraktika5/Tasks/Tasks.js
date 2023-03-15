import React, { useState } from "react";
import Task from "../Task/Task";
import { v4 as uuidv4 } from "uuid";

function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Lorem ipsum 1",
            status: false,
        },
        {
            id: 2,
            text: "Lorem ipsum 2",
            status: false,
        },
        {
            id: 3,
            text: "Lorem ipsum 3",
            status: false,
        },
        {
            id: 4,
            text: "Lorem ipsum 4",
            status: false,
        },
        {
            id: 5,
            text: "Lorem ipsum 5",
            status: false,
        },
    ]);

    const [taskInput, setTaskInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const task = {
            id: uuidv4(),
            text: taskInput,
            status: false,
        };
        setTasks((oldTasks) => [...oldTasks, task]);
        setTaskInput("");
    }

    function changeStatus(id) {
        const updateTasks = [...tasks];
        updateTasks.forEach((task) => {
            if (task.id === id) {
                task.status = true;
            }
        });
        setTasks(updateTasks);
    }

    function deleteTask(id) {
        let updateTasks = [...tasks];
        updateTasks = updateTasks.filter((task) => task.id !== id);
        setTasks(updateTasks);
    }

    let list = tasks.map((task) => {
        return (
            <div
                key={task.id}
                className="row justify-content-center align-items-baseline"
            >
                <Task
                    id={task.id}
                    text={task.text}
                    status={task.status}
                    changeStatus={changeStatus}
                    deleteTask={deleteTask}
                />
            </div>
        );
    });

    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control mt-5"
                            type="text"
                            id="taskInput"
                            name="taskInput"
                            value={taskInput}
                            placeholder="Add task..."
                            onChange={(e) => setTaskInput(e.target.value)}
                        />
                    </form>
                </div>
            </div>
            <div className="mt-5">{list}</div>
        </>
    );
}

export default Tasks;
