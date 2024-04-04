import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Expense-manager
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/home' className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{marginRight : '28px'}}>
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/'>
                                    <button className='btn btn-outline-success'>Log in</button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
