import React from 'react'
import { useNavigate } from 'react-router-dom'

function TopHeader() {
    let navigate = useNavigate()
    return (
        <div>
            <center>
                <h1 style={{ marginTop: '22px', marginBottom: '28px' }}> My Expense Manager </h1>
            </center>
            <div>
                <section style={{ margin: '20px 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px' }}>
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Filter by Date
                        </button>
                        <ul className="dropdown-menu cursor-pointer" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <p className="dropdown-item">
                                    Hour ago
                                </p>
                            </li>
                            <li>
                                <p className="dropdown-item">
                                    7 Hours ago
                                </p>
                            </li>
                            <li>
                                <p className="dropdown-item">
                                    12 hours ago
                                </p>
                            </li>
                            <li>
                                <p className="dropdown-item">
                                    Day ago
                                </p>
                            </li>
                            <li>
                                <p className="dropdown-item">
                                    7 days ago
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="d-flex">
                            <input className="form-control" type="search" placeholder=" Search expenses...." aria-label="Search" />
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-outline-success' onClick={() => {
                            navigate('/add-expenses')
                        }}> + Add Expenses</button>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default TopHeader