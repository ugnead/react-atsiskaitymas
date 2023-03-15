import React, {useState, useEffect} from 'react'
import Task from '../Task/Task'
// import { v4 as uuidv4 } from 'uuid';

function Tasks2() {
    const [tasks, setTasks] = useState([]);

    async function getTodos() {
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
        const tasks = await response.json();
        setTasks(tasks);
    }

    useEffect(() => {
        getTodos();
    }, []);

    function changeStatus(id) {
        const updateTasks = [...tasks];
        updateTasks.forEach((task) => {
            if(task.id === id) {
                task.completed = true;
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
            <div key={task.id} className='row justify-content-center align-items-baseline'>
                <Task 
                    
                    id={task.id}
                    text={task.title} 
                    status={task.completed}
                    changeStatus={changeStatus}
                    deleteTask={deleteTask}
                />
            </div>
        );
    });
    
    return <div className="mt-5" >{list}</div>
}

export default Tasks2