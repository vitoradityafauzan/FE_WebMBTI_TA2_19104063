import { combineReducers } from 'redux'

import authReducer from './authReducer'
import adminAuthReducer from './admins/adminAuthReducers'
import adminInfoReducers from './admins/adminInfoReducers'

export default combineReducers({
    auth: authReducer,
    adminAuth: adminAuthReducer,
    adminInfo: adminInfoReducers,
})