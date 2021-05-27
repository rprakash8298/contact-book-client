import React, { useState } from 'react'
import Navbar from '../dashboard/Navbar'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {signup,signin} from '../../action/user'
import './style.css'
const Auth = () => {
    const initialValue = { name:'',email:'',password:'',confirmpassword:''}
    const [postData, setPostData] = useState(initialValue)
    const [isSignup, setIsSignup] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (isSignup) {
            dispatch(signup( postData,history ))
        } else {
            dispatch(signin( postData,history ))
            
        }
    }
    const handleChange = (e) => {
        setPostData({
            ...postData, [e.target.name]:e.target.value
        })
    }
    const switchmode = (e) => {
        e.preventDefault()
        setIsSignup((prevState) => !prevState)
    }
    return (
        <>
         <Navbar />   
        <div className="container">
            <div className="row">
                <div className="col ">
                        <div className="card position-absolute top-50 start-50 translate-middle" style={{ width: '24rem' }}>
                            <div className="text-center mt-3"><i className="fas fa-user fa-3x" style={{color: 'rgb(8, 8, 99)'}}></i></div>
                        <h2 className="card-title text-center mt-2">{isSignup ? "Sign Up" : "Sign In" }</h2>
                        <form className="p-4" onSubmit= {handleSubmit} >
                                {isSignup && (
                                <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name= "name"  onChange={handleChange} placeholder="Name" autoFocus/>
                                </div>    
                                )}
                                <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Email Address" autoFocus/>
                                </div>
                                <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Password"/>
                                </div>
                                {isSignup && (
                                <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" onChange={handleChange} name="confirmpassword" placeholder="Confirm Password"/>
                                 </div>
                                )}
                                <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-block btn_design" >Submit</button>
                                <button className="btn btn-block btn_design" onClick={switchmode}>{isSignup ?  'Aready Have An Account ? Sign In' :"don't have account ? Sign Up" }</button>
                                </div>
                                
                        </form>
                   </div>
                </div>
            </div>
        </div>
     </>   
    )
}

export default Auth
