import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome Back!</p>
      </header>
      <main>
        <form>
          <input type="email" placeholder="Email" id="email" value={email} onChange={onChange} className="emailInput" />
          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='password' id='password' value={password} onChange={onChange} />
            <img src={visibilityIcon} alt="Show Password" onClick={() => setShowPassword((prevState) => !prevState)} className="showPassword" />
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        {/* Google OAuth */}

        <Link to='/sign-up' className='registerLink'>No account?  Sign up!</Link>
      </main>
    </div>
    </>
  )
}

export default SignIn