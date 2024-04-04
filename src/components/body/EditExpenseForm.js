import React from 'react'
import { useFormik } from 'formik';
import { useNavigate , useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch , useSelector } from 'react-redux';
import { editExpense } from '../../store/actions';
import moment from 'moment';

function EditExpenseForm() {
  let navigate = useNavigate();
  let dispacth = useDispatch();
  let { id } = useParams();
  console.log(id)

  let expenseData = useSelector((expenseStore)=> expenseStore.expenses);
  let currentExpense = expenseData.find((currentItem)=> currentItem.id === id);
  console.log(expenseData);
  console.log(currentExpense);
  let { name , category , dateOfExpense , amount} =  currentExpense;
  let numericAmount = parseInt(amount.replace(/[^\d.]/g, ''), 10);
  let dateFormatted = moment(dateOfExpense, 'DD MMMM YYYY').format('MM-DD-YYYY');

  let formik = useFormik({
    initialValues: {
      name: name,
      category: category,
      dateOfExpense: dateFormatted,
      amount: numericAmount,
    },
    onSubmit: (values) => {
      console.log(values)
      dispacth(editExpense(id ,values));
      toast.success('Expense edited successfully')
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
          <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Edit my Expense here </h2>
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
              onChange={formik.handleChange} required/>
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

export default EditExpenseForm;