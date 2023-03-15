import React, {useState} from 'react'
import Task from '../Task/Task'
import { v4 as uuidv4 } from 'uuid';

function Tasks() {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState(
        [
            {   
                id: 1,
                text: 'Lorem ipsum 1',
                status: false
            }, 
            {
                id: 2,
                text: 'Lorem ipsum 2',
                status: false
            }, 
            {
                id: 3,
                text: 'Lorem ipsum 3',
                status: false
            },
            {
                id: 4,
                text: 'Lorem ipsum 4',
                status: false
            },
            {
                id: 5,
                text: 'Lorem ipsum 5',
                status: false
            }
        ]
    );

    function changeStatus(id) {
        const updateTasks = [...tasks];
        updateTasks.forEach((task) => {
            if(task.id === id) {
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

    function handleSubmit(e) {
        e.preventDefault();
        if(taskInput) {
            const task = { id: uuidv4(), text: taskInput, status: false };
            setTasks((oldTasks) => [...oldTasks, task]);
            setTaskInput('');
        } else {
            console.log('empty value');
        }
    };
    
    let list = tasks.map((task) => {
        return (
            <div key={task.id} className='row align-items-baseline'>
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
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            id='taskInput'
                            className="form-control mt-5 mb-5"
                            name='taskInput'
                            value={taskInput}
                            placeholder='Add task...'
                            onChange={(e) => setTaskInput(e.target.value)}
                        />
                    </form>
                </div>

            </div>
            {list}
        </>
    )
}

export default Tasks