import React from 'react';
import { MdArrowForwardIos, MdCheck } from "react-icons/md";

function Task(props) {
    let {id, text, status, changeStatus, deleteTask} = props;

    return (
        <>
            <div className='col'>
                <div className={status ? "alert alert-success" : "alert alert-secondary"} role="alert">
                    {status ? <MdCheck /> : <MdArrowForwardIos />}{text}
                </div>
            </div>
            <div className='col-lg-2 col-3'>
                <button onClick={() => changeStatus(id)} type="button" className="btn btn-success w-100">{status ? "Done" : "Check"}</button>  
            </div>
            <div className='col-lg-2 col-3'>   
                <button onClick={() => deleteTask(id)} type="button" className="btn btn-danger w-100">Delete</button>
            </div>
        </>
        
    )
}

export default Task