import * as api from '../api/index'
import {ADD_CONTACT,UPDATE_CONTACT,READ_CONTACT,DELETE_CONTACT,SEARCH_CONTACT } from '../actionTypes/types'


export const add_contact = (post) => async (dispatch) => {
    try {
        const { data } = await api.add_contact(post)
        dispatch({type:ADD_CONTACT,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const read_contact = () => async (dispatch) => {
    try {
        const { data } = await api.read_contact()
        console.log(data)
        dispatch({ type: READ_CONTACT, payload: data })
    } catch (error) {
        console.log(error)
    }
}
export const search_contact = (search) => async (dispatch) => {
    try {
        const { data:{data} } = await api.contactBySearch(search)
        dispatch({ type: SEARCH_CONTACT, payload: { data }})
    } catch (error) {
        console.log(error)
    }
}
export const update_contact = (id,postData) => async (dispatch) => {
    try {
        const { data } = await api.update_contact(id,postData)
        dispatch({type:UPDATE_CONTACT,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const delete_contact = (id) => async (dispatch) => {
    try {
         await api.delete_contact(id)
        dispatch({type:DELETE_CONTACT,payload:id})
    } catch (error) {
        console.log(error)
    }
}
