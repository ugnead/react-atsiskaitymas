import React from 'react';

function Student(props) {
    let {id, name, surname, birthYear, city, program, group, deleteStudent} = props;

    return (
        <>
            <tr>
                <th scope="col">{name}</th>
                <th scope="col">{surname}</th>
                <th scope="col">{birthYear}</th>
                <th scope="col">{city}</th>
                <th scope="col">{program}</th>
                <th scope="col">{group}</th>
                <th scope="col">
                    <button onClick={() => deleteStudent(id)} type="button" className="btn btn-danger w-100">Delete</button>
                </th>
            </tr>           
        </>
        
    )
}

export default Student