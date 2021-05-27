import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {read_contact} from '../action/contact'

const Pagination = ({ page }) => {
    const dispatch = useDispatch()
    const { size,contacts } = useSelector((state) => state.contact)
    const numOfPage = Math.ceil(size / 6)
    // console.log(numOfPage)
    // console.log(numberOfPage)
    // useEffect(() => {
    //     if (page) {
    //        dispatch(read_contact(page))
    //     }
    // },[dispatch,page])
    const pagni = () => {
        for (let i = 1; i <= numOfPage; i++){
            return (<li class="page-item"><a class="page-link" href="#">{i}</a></li>)
            
        }
    }
    console.log(contacts)
    return (
        <div className="footer">
        <nav aria-label="Page navigation example">
             <ul class="pagination justify-content-center">
            {pagni}
        </ul>
        </nav>
        </div>
    )
}

export default Pagination
