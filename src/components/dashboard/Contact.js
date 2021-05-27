import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_contact } from '../../action/contact'
import Pagination from '../Pagination'


const Contact = ({setCurrentId,page}) => {
     const dispatch = useDispatch()
    const { contacts } = useSelector((state) => state.contact)
    console.log(contacts)

    return (
      !contacts?.length ? "No Contact Created" : (
            <div className="" >                
                <table class="table adjust_height">
                    {contacts.map((contact) => (
                        <tbody key={contact._id}>
                            <tr>
                            <td><img src={contact.image ? contact.image:"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"} alt="avatar" className="avatar" /></td>
                            <td>{contact.fullname}</td>
                            <td>{contact.number}</td>
                            <td>{contact.email}</td>
                            <td>{contact.alt_number}</td>
                            <td>{contact.address}</td>
                                <td>
                                    <span ><button className="btn btn-light rounded-circle mx-1" data-bs-toggle="modal" data-bs-target="#editContact" onClick={() => setCurrentId(contact._id)} ><i className="fas fa-pen text-primary"></i></button></span>
                                    <span><button className="btn btn-light rounded-circle" onClick={()=> dispatch(delete_contact(contact._id))}><i class="fas fa-trash-alt text-danger"></i></button></span>
                                </td>
                            </tr>  
                        </tbody> 
                    ))}               
                </table>
               <Pagination page={page} />
            </div>
             )   
        
    )
}

export default Contact
