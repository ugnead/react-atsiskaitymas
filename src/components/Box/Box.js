import React, {useState} from 'react'
import './Box.css';

function Box(props) {
    const [buttonRed, setColor] = useState(false);
    function changeButtonColor() {
        setColor(!buttonRed);
    }
    return (
        <div className='col-4'>
            <div className={props.color + " Box-item"}>
                <button 
                    onClick={changeButtonColor} 
                    type="button" 
                    className={buttonRed ? "btn btn-success" : "btn btn-danger"}>Ok
                </button>
            </div>
        </div>
    )
}

export default Box