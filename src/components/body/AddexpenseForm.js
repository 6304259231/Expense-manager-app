import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../store/actions';

function AddexpenseForm() {
  let navigate = useNavigate();
  let dispacth = useDispatch();

  let formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      dateOfExpense: '',
      amount: '',
    },
    onSubmit: (values) => {
      dispacth(addExpense(values));
      toast.success('Expense added successfully')
      setTimeout(()=>{
        navigate('/home')
      } , 1000)
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Name is required'
      }
      if (!values.category) {
        errors.category = 'Category is required'
      }
      if (!values.dateOfExpense) {
        errors.dateOfExpense = 'Date of expense is required'
      }
      if (!values.amount) {
        errors.amount = 'Amount is required'
      }
      return errors;
    }
  })
  return (
    <div className='form-section' style={{ width: '65%', boxShadow: '4px 5px 8px grey', margin: '20px auto', padding: '8px', background: 'whitesmoke' }}>
      <ToastContainer />
      <div style={{ width: '75%', margin: '14px auto' }}>
        <center>
          <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Add a New Expense here </h2>
        </center>

        {/* ADD expense form */}
        <form onSubmit={formik.handleSubmit} className='m-4' autoComplete='off'>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">
              Name <span style={{ color: 'red', fontSize: '18px', marginLeft: '6px' }}> * </span>
            </label>
            <input type="text"
              className="form-control"
              name='name' id='name'
              placeholder='Enter name'
              value={formik.values.name}
              onChange={formik.handleChange} />
            <div className='error-name'>{formik.errors.name ? <div> {formik.errors.name}</div> : null}</div>
          </div>

          <div>
            <p>Choose Category <span style={{ color: 'red', fontSize: '18px', marginLeft: '6px' }}> * </span></p>
            <div className="input-group mb-3 mt-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Category
              </label>
              <select className="form-select" id="category" name='category' value={formik.values.category} onChange={formik.handleChange} >
                <option selected="">Choose...</option>
                <option value='Health'>Health</option>
                <option value='Electronics'>Electronics</option>
                <option value='Travel'>Travel</option>
                <option value='Education'>Education</option>
                <option value='Books'>Books</option>
                <option value='Others'>Others</option>
              </select>
            </div>
            <div className='error-name'>{formik.errors.category ? <div> {formik.errors.category}</div> : null}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">
              Date of Expense <span style={{ color: 'red', fontSize: '18px', marginLeft: '6px' }}> * </span>
            </label>
            <input type="date"
              className="form-control"
              id="date" name='dateOfExpense'
              value={formik.values.dateOfExpense}
              onChange={formik.handleChange} />
            <div className='error-name'>{formik.errors.dateOfExpense ? <div> {formik.errors.dateOfExpense}</div> : null}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">
              Amount <span style={{ color: 'red', fontSize: '18px', marginLeft: '6px' }}> * </span>
            </label>
            <input type="number"
              className="form-control"
              id="amount" name='amount'
              placeholder='Enter Amount here'
              value={formik.values.amount}
              onChange={formik.handleChange} />
            <div className='error-name'>{formik.errors.amount ? <div> {formik.errors.amount}</div> : null}</div>
          </div>

          <hr />
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }} className='pb-2 mb-2'>
            <button className="btn btn-warning" onClick={ ()=> navigate('/home')}>
              Close
            </button>
            <button type="submit" className="btn btn-success" >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddexpenseForm