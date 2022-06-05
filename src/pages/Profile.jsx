import {getAuth} from 'firebase/auth'
import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import React from 'react'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  const {name, email} = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }
  
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type='button' onClick={onLogout} className="logOut">
          Logout
        </button>
      </header>
    </div>
  )
}

export default Profile