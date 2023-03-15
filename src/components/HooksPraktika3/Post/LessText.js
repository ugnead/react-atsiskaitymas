import React, {useState} from 'react'
import './LessText.css'


function LessText(props) {
  const { text, maxLength } = props;

  const [status, setStatus] = useState(false);
  
  function changeStatus() {
    setStatus(!status)
  }
  return (
    <div className='Post'>
      <p>
        {status ? text : text.substring(0, maxLength)}
        <button className='Button' onClick={changeStatus}> {status ? 'Less text...' : 'More text...'}</button>
      </p>
    </div>
  )
}

export default LessText