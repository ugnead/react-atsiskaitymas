import React, { useState, useEffect } from "react";
import User from "../User/User";
// import { v4 as uuidv4 } from 'uuid';

function Users() {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        const response = await fetch("https://api.github.com/users");
        const users = await response.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    let list = users.map((user) => {
        return (
            <User
                key={user.id}
                id={user.id}
                avatarUrl={user.avatar_url}
                userName={user.login}
                profileLink={user.html_url}
            />
        );
    });

    return <div className="row justify-content-center my-5">{list}</div>;
}

export default Users;
