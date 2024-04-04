import React, { useState } from 'react'
import TopHeader from './TopHeader';
import './HomePage.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { deleteExpense } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    let expensesData = useSelector((expenseStore) => expenseStore.expenses);
    console.log(expensesData)
    let [currentExpenseId, setCurrentExpenseId] = useState(null);
    let navigate = useNavigate();
    let dispacth = useDispatch();

    const deleteHandler = (id) => {
        dispacth(deleteExpense(id));
        toast.success('Expense deleted successfully');
        setCurrentExpenseId(null)
    }
    return (
        <>
            <ToastContainer />
            <TopHeader />
            <section id='home-page-table-section'>
                <table className='w-100'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Date of Expense</th>
                            <th>Amount</th>
                            <th>Updated At</th>
                            <th>Created By</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            expensesData && expensesData.map((expenseItem) => {
                                let { name, category, dateOfExpense, amount, updatedAt, createdBy, id } = expenseItem
                                return (
                                    <tr key={id}>
                                        <td>{name}</td>
                                        <td>{category}</td>
                                        <td>{dateOfExpense}</td>
                                        <td>{amount}</td>
                                        <td>{updatedAt}</td>
                                        <td>{createdBy}</td>
                                        <td>
                                            <div className='d-flex gap-2'>
                                                <button onClick={ ()=> navigate(`/edit-expenses/${id}`)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16" style={{ color: 'grey' }}>
                                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                    </svg>
                                                </button>
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setCurrentExpenseId(id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16" style={{ color: 'red' }}>
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {/* delete modal */}
                <div className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    ! Delete Warning
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body" style={{ color: 'tomato', fontSize: '18px' }}> Your item will be deleted permanently </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={(e) => {
                                    deleteHandler(currentExpenseId)
                                }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default HomePage