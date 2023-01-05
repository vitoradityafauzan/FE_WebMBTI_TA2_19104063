import { combineReducers } from 'redux'

import authReducer from './authReducer'
import adminAuthReducer from './admins/adminAuthReducers'
import userInfoReducers from './userInfoReducers'
import adminInfoReducers from './admins/adminInfoReducers'
import mbtiReducers from './mbtiReducers'

export default combineReducers({
    auth: authReducer,
    userInfo: userInfoReducers,
    adminAuth: adminAuthReducer,
    adminInfo: adminInfoReducers,
    mbti: mbtiReducers,
})