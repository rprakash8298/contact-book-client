import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add_contact, update_contact } from '../../action/contact'
import FileBase from 'react-file-base64';

const Modal = ({ addContact,editContact,currentId,setCurrentId }) => {
    const initialState = {image:'',fullname:'',number:'',email:'',alt_number:'',address:''}
    const [postData, setPostData] = useState(initialState)
    const contact = useSelector((state) => (currentId ? state.contact.contacts.find((el) => el._id ===currentId) :null))
    const dispatch = useDispatch()
    console.log(contact)
    useEffect(() => {
        if(contact) {setPostData(contact)}
    },[contact])
    
    const handleInput = (e) => {
        const value = e.target.value
        setPostData({
            ...postData,[e.target.name]:value
        })
    }
    const clear = () => {
    setCurrentId(0)
    setPostData({image:'',fullname:'',number:'',email:'',alt_number:'',address:''});
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (addContact && currentId === 0) {
            dispatch(add_contact(postData))
            clear()
        } else if (editContact) {
            dispatch(update_contact(currentId, postData))
            clear()
        }
    }
    // console.log(postData)
    // console.log(currentId)
    return (

        <>
         <div className="modal fade" id={`${addContact || editContact}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header ">
                    <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="col-form-label">Profile Image</label>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
                    </div>
                    <div className="mb-3">
                        <label  className="col-form-label">Full Name</label>
                        <input type="text" className="form-control" name="fullname" value={postData.fullname} onChange = {handleInput} />
                    </div>
                     <div className="mb-3">
                        <label  className="col-form-label">Email</label>
                        <input type="text" className="form-control" name="email" value={postData.email} onChange = {handleInput} />
                    </div>
                     <div className="mb-3">
                        <label className="col-form-label">Number</label>
                        <input type="text" className="form-control" name="number" value={postData.number} onChange = {handleInput} />
                    </div>
                     <div className="mb-3">
                        <label className="col-form-label">Alternate Number</label>
                        <input type="text" className="form-control" name="alt_number" value={postData.alt_number} onChange = {handleInput} />
                    </div>
                    <div className="mb-3">
                        <label  className="col-form-label">Address</label>
                        <input type="text" className="form-control" name="address" value={postData.address} onChange = {handleInput} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-info rounded-pill mx-auto mr-2">Save</button>          
                        <button type="button" className="btn btn-info rounded-pill mx-auto mr-2" onClick={clear}>Clear</button>          
                                    
                    </div>
                    </form>
                </div>
                   
                </div>
            </div>
            </div>
        </>
    )
}

export default Modal

