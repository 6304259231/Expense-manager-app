import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function LoginForm( { loginStatus , setLoginStatus}) {
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      if (values.email === values.password) {
        toast.success('Logged in successfully');
        setLoginStatus(true)
        setTimeout(() => {
          navigate('/home')
        }, 1000)
      }
      else {
        toast.error('check credentials ! Password must be same as email')
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'email is required'
      }
      if (!values.password) {
        errors.password = 'password is required'
      }
      return errors;
    }
  })
  return (
    <div className='form-section' style={{ width: '65%', boxShadow: '4px 5px 8px grey', margin: '20px auto', padding: '20px' }}>
      <ToastContainer />
      <div style={{ width: '75%', margin: '14px auto' }}>
        <center>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg>
          <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Login </h2>
        </center>

        {/* login form */}

        <form onSubmit={formik.handleSubmit} className='m-4'>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg> Email <span style={{ color: 'red', fontSize: '18px', marginLeft: '6px' }}> * </span>
            </label>
            <input type="email"
              className="form-control" 
              id="email" name='email'
              placeholder='xxx@email.com'
              value={formik.values.email}
              onChange={formik.handleChange} />
            <div>{formik.errors.email ? <div style={{ color: 'red', fontFamily: 'monospace', fontSize: '14px' }}> {formik.errors.email}</div> : null}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
              </svg> Password <span style={{ color: 'red', fontSize: '18px', marginLeft: '6px' }}> * </span>
            </label>
            <input type="password"
              className="form-control"
              id="password"
              name='password'
              placeholder='password must be same as email'
              value={formik.values.password} onChange={formik.handleChange} />
            <div>{formik.errors.password ? <div style={{ color: 'red', fontFamily: 'monospace', fontSize: '14px' }}> {formik.errors.password}</div> : null}</div>
          </div>
          <hr />
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }} className='pb-2 mb-2'>
            <button type="submit" className="btn btn-success">
             Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm