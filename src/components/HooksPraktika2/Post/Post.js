import React, {useState} from 'react'
import './Post.css';

function Post() {
    const [countLike, setLikeCount] = useState(0);
    const [countDislike, setDislikeCount] = useState(0);
    
    function changeLikeCount() {
        setLikeCount(countLike + 1);
    }
    function changeDislikeCount() {
        setDislikeCount(countDislike + 1);
    }
    function resetCount() {
        setDislikeCount(0);
        setLikeCount(0);
    }
    return (
        <div className="card Width mt-5">
            <img src="https://reactjs.org/logo-og.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button onClick={changeLikeCount} className="btn btn-success ">Like {countLike}</button>
                <button onClick={changeDislikeCount} className="btn btn-danger ms-1 me-1">Dislike {countDislike}</button>
                <button onClick={resetCount} className="btn btn-primary">Reset</button>
            </div>
        </div>
    )
}

export default Post