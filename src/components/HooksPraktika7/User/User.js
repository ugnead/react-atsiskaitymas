import React from "react";
import "./User.css";

function User(props) {
    let { avatarUrl, userName, profileLink } = props;

    return (
        <div className="Box col-lg-3 col-md-4 col-sm-6 col-10 my-2 mx-2 py-5 text-center bg-light w-30 rounded">
            <img
                className="bd-placeholder-img rounded-circle"
                src={avatarUrl}
                alt="profile"
                width="140"
                height="140"
            />
            <h2>{userName}</h2>
            <p>{profileLink}</p>
            <a class="btn btn-secondary" href={profileLink} role="button">
                View details &raquo;
            </a>
        </div>
    );
}

export default User;
