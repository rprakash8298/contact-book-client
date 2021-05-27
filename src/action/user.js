import {  SIGNIN, SIGNUP } from '../actionTypes/types'
import * as api from '../api/index'

export const signup = (postData,history) =>async (dispatch) => {
    try {
        const { data } = await api.signup(postData)
        dispatch({type:SIGNUP, payload:data})
        history.push('/dashboard')
    } catch (error) {
        console.log(error)
    }
}
export const signin = (postData,history) =>async (dispatch) => {
    try {
        const { data } = await api.signin(postData)
        console.log(data)
        dispatch({type:SIGNIN, payload:data})
        history.push('/dashboard')
    } catch (error) {
        console.log(error)
    }
}