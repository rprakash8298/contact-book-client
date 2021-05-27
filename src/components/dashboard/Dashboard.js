import React, {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Contact from './Contact'
import Modal from './Modal'
import './dashboard.css'
import { read_contact,search_contact } from '../../action/contact'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Dashboard = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()
    // const query = useQuery()
    const history = useHistory()
    // const page = query.get('page') || 1
    // const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('')
    

    useEffect(() => {
        dispatch(read_contact())
    }, [currentId, dispatch])

    const searchContact = () => {
        if (search.trim()) {
            dispatch(search_contact(search))
        } else {
            history.push('/dashboard')
        }
    }
    const handleKey = (e) => {
        
        if (e.key === "Enter") {
            e.preventDefault()
            // console.log( 'search',e.key)
            searchContact()
            setSearch('')
        }
    }
    // console.log(search)
    return (
        <>
        <Navbar />
       <div className="container">
           <div className="row position-absolute top-50 start-50 translate-middle dash_size">
                    <div className="col">
                        <nav class="nav mt-2 mx-3 position-absolute top-0 end-0">
                        {/* <a className="nav-link active" aria-current="page" href="#">Active</a> */}
                            <form className="mx-3" >
                                <div className="form-control" style={{border:'none'}}>
                                    <input type="text"  className="form-control-plaintext"  name="search" onKeyPress={handleKey} value={search} onChange={(e) =>setSearch(e.target.value) }  placeholder="Search here" />
                                </div>
                            </form>
                        <a className="nav-link btn btn-warning" href="#" data-bs-toggle="modal" data-bs-target="#addContact" >Add Contact</a>
                        </nav>
                         <Contact  setCurrentId={setCurrentId} />
                       
                  </div>
           </div>
            </div>
            
            {/* modal for edit contact onClick ={() => setToggle('addContact')} */}
            <Modal addContact='addContact' currentId={currentId} setCurrentId={setCurrentId} />
            <Modal editContact='editContact' currentId={currentId} setCurrentId={setCurrentId} />

        </>
    )
}

export default Dashboard
