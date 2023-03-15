import React, { useState } from "react";
import Student from "../Student/Student";
import { v4 as uuidv4 } from "uuid";
import "./Students.css";

function Students() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Jonas",
            surname: "Jonaitis",
            birthYear: 2000,
            city: "Vilnius",
            program: "Javascript",
            group: 2,
        },
        {
            id: 2,
            name: "Petras",
            surname: "Petraitis",
            birthYear: 1999,
            city: "Kaunas",
            program: "Java",
            group: 1,
        },
        {
            id: 3,
            name: "Ona",
            surname: "Onaite",
            birthYear: 1998,
            city: "Vilnius",
            program: "Javascript",
            group: 2,
        },
        {
            id: 4,
            name: "Juozas",
            surname: "Juozaitis",
            birthYear: 2002,
            city: "Kaunas",
            program: "Java",
            group: 1,
        },
        {
            id: 5,
            name: "Laura",
            surname: "Lauraite",
            birthYear: 1995,
            city: "Klaipeda",
            program: "PHP",
            group: 3,
        },
    ]);

    const [studentsDisplay, setStudentsDisplay] = useState(students);

    const [addStudent, setAddStudent] = useState({
        nameInput: "",
        surnameInput: "",
        ageInput: "",
        cityInput: "",
        programSelect: "",
        groupSelect: "",
    });

    const {
        nameInput,
        surnameInput,
        ageInput,
        cityInput,
        programSelect,
        groupSelect,
    } = addStudent;

    // students search ---------------------------------------------------
    function handleSearchInputChange(e) {
        e.preventDefault();
        const searchValue = e.target.value.toLowerCase();
        const filteredList = students.filter((student) => {
            return (
                student.name.toLowerCase().includes(searchValue) ||
                student.surname.toLowerCase().includes(searchValue) ||
                student.birthYear.toString().includes(searchValue) ||
                student.city.toLowerCase().includes(searchValue) ||
                student.program.toLowerCase().includes(searchValue) ||
                student.group.toString().includes(searchValue)
            );
        });
        setStudentsDisplay(filteredList);
    }

    const checkKeyDown = (e) => {
        if (e.key === "Enter") e.preventDefault();
    };

    // students filter ---------------------------------------------------
    function handleFilterChange(e) {
        e.preventDefault();
        const filterValue = e.target.value;
        const filteredList = students.filter((student) => {
            return (
                student.program === filterValue ||
                student.group == filterValue
            );
        });
        setStudentsDisplay(filteredList);
    }

    // delete student -------------------------------------------------------
    function deleteStudent(id) {
        let updatedList = [...students];
        alert("Are you sure you want to delete this student?");
        updatedList = updatedList.filter((student) => student.id !== id);
        setStudents(updatedList);
        setStudentsDisplay(updatedList);
    }

    // add student -------------------------------------------------------
    function handleAddStudentInputChange(e) {
        const { name, value } = e.target;
        console.log(name);
        setAddStudent((oldData) => ({ ...oldData, [name]: value }));
    }

    function AddStudent(e) {
        e.preventDefault();
        if (
            nameInput &&
            surnameInput &&
            ageInput &&
            cityInput &&
            programSelect &&
            groupSelect
        ) {
            const student = {
                id: uuidv4(),
                name: nameInput,
                surname: surnameInput,
                birthYear: ageInput,
                city: cityInput,
                program: programSelect,
                group: groupSelect,
            };
            setStudents((oldStudents) => [...oldStudents, student]);
            setStudentsDisplay((oldStudents) => [...oldStudents, student]);
            setAddStudent((oldData) => ({
                ...oldData,
                nameInput: "",
                surnameInput: "",
                ageInput: "",
                cityInput: "",
                programSelect: "",
                groupSelect: "",
            }));
        } else {
            console.log("empty value");
        }
    }

    // map students list -------------------------------------------
    let list = studentsDisplay.map((student) => {
        return (
            <Student
                key={student.id}
                id={student.id}
                name={student.name}
                surname={student.surname}
                birthYear={student.birthYear}
                city={student.city}
                program={student.program}
                group={student.group}
                deleteStudent={deleteStudent}
            />
        );
    });

    return (
        <>
            <div className="row mt-5 mb-2">
                <div className="col-lg-8 col-6">
                    {/* add student front-end display */}
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Add student
                    </button>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body AddStudentFormWidth">
                            <form onSubmit={AddStudent}>
                                <input
                                    type="text"
                                    id="nameInput"
                                    className="form-control mt-2 mb-2"
                                    name="nameInput"
                                    value={nameInput}
                                    placeholder="First Name"
                                    onChange={handleAddStudentInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    id="surnameInput"
                                    className="form-control mt-2 mb-2"
                                    name="surnameInput"
                                    value={surnameInput}
                                    placeholder="Last Name"
                                    onChange={handleAddStudentInputChange}
                                    required
                                />
                                <input
                                    type="number"
                                    id="ageInput"
                                    className="form-control mt-2 mb-2"
                                    name="ageInput"
                                    value={ageInput}
                                    placeholder="Birth Year"
                                    onChange={handleAddStudentInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    id="cityInput"
                                    className="form-control mt-2 mb-2"
                                    name="cityInput"
                                    value={cityInput}
                                    placeholder="City"
                                    onChange={handleAddStudentInputChange}
                                    required
                                />
                                <select
                                    className="form-select mt-2 mb-2"
                                    aria-label="Default select example"
                                    id="programSelect"
                                    name="programSelect"
                                    onChange={handleAddStudentInputChange}
                                    required
                                >
                                    <option defaultValue>Program</option>
                                    <option value="Javascript">
                                        Javascript
                                    </option>
                                    <option value="Java">Java</option>
                                    <option value="PHP">PHP</option>
                                </select>
                                <select
                                    className="form-select mt-2 mb-2"
                                    aria-label="Default select example"
                                    id="groupSelect"
                                    name="groupSelect"
                                    onChange={handleAddStudentInputChange}
                                    required
                                >
                                    <option defaultValue>Group</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-2 text-end">
                    {/* filter front-end display */}
                    <div class="dropdown">
                        <button
                            class="btn btn-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Filter
                        </button>
                        <ul class="dropdown-menu p-3">
                            <select
                                className="form-select mb-2"
                                aria-label="Default select example"
                                id="programSelect"
                                name="programSelect"
                                onChange={handleFilterChange}
                                required
                            >
                                <option defaultValue>Program</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Java">Java</option>
                                <option value="PHP">PHP</option>
                            </select>
                            <select
                                className="form-select mt-2 mb-2"
                                aria-label="Default select example"
                                id="groupSelect"
                                name="groupSelect"
                                onChange={handleFilterChange}
                                required
                            >
                                <option defaultValue>Group</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-4">
                    {/* students search front-end display */}
                    <form>
                        <input
                            type="text"
                            id="searchInput"
                            className="form-control"
                            name="searchInput"
                            placeholder="Search"
                            onChange={handleSearchInputChange}
                            onKeyDown={(e) => checkKeyDown(e)}
                            autoComplete="off"
                        />
                    </form>
                </div>
            </div>

            {/* table front-end display */}
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Birth Year</th>
                        <th scope="col">City</th>
                        <th scope="col">Program</th>
                        <th scope="col">Group</th>
                    </tr>
                </thead>
                <tbody>{list}</tbody>
            </table>
        </>
    );
}

export default Students;
