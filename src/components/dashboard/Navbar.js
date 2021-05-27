import React, {useEffect} from 'react'
import {useHistory,Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode'
const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" })
    history.push('/')

  }
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logoutHandler()
      }
    }
  })
    return (
        <nav className="navbar navbar-expand-lg ">
       <div className="container-fluid">
      <Link className="navbar-brand" to='/dashboard'><strong className="h3">Contact Book</strong></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
              {token &&
                <a className="nav-link" href="#" className="btn btn-outline-danger rounded-pill" onClick={logoutHandler}>Logout</a>
        }
      </div>
      </div>
     </div>
   </nav>
    )
}

export default Navbar
