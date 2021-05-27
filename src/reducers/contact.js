import {ADD_CONTACT,UPDATE_CONTACT,READ_CONTACT,DELETE_CONTACT,SEARCH_CONTACT } from '../actionTypes/types'

const initialState = {
    contacts: [],
    size: 0
}
export default ( state = initialState, action) => {
    // console.log(state, action.payload,action.type);
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                size: action.payload.length,
                contacts:[...state.contact ,action.payload]
            }
        case UPDATE_CONTACT:
            return  {...state,contacts:state.contacts.map((post) => (post._id === action.payload._id ? action.payload : post))}
        case READ_CONTACT:
            // console.log(action.payload)
            return {
                ...state,
                size: action.payload.length,
                contacts: action.payload
            }
        case SEARCH_CONTACT:
            return {...state,contacts:action.payload.data}
        case DELETE_CONTACT:
            return {...state,contacts:state.contacts.filter((cont) => cont._id !== action.payload)}
        default:
            return state
    }
}