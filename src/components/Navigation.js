import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <h2 className="navbar-brand mt-1">
                    Projektas
                </h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/praktika-2">
                                Praktika 2
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/praktika-3">
                                Praktika 3
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/praktika-5">
                                Praktika 5
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/praktika-6">
                                Praktika 6
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/praktika-7">
                                Praktika 7
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/praktika-1">
                                Praktika 1
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
