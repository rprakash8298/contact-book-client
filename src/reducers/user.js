import {SIGNIN,SIGNUP} from '../actionTypes/types'
export default (user = [], action) => {
    switch (action.type) {
        case SIGNUP:
            console.log(action.payload.token)
            localStorage.setItem('token',(action.payload.token))
            return [...user, action.payload]
        case SIGNIN:
            console.log(action.payload.token)
            localStorage.setItem('token',(action.payload.token))
            return [...user, action.payload]
        case "LOGOUT":
            localStorage.clear()
            return [...user]
        default:
            return user
    }
}