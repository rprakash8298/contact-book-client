import { combineReducers } from 'redux'

import user from './user'
import contact from './contact'

export const rootReducer = combineReducers({
    user,contact
})