import {
    DELETE_SESSION_ADMIN,
    GET_ADMIN,
    JUST_UPDATED_ADMIN,
    ADMIN_ERROR,
  } from '../../actions/types'
  
  const initialState = {
    adminInfo: {},
    adminJustUpdated: false,
    errorInfoAdmin: null,
  }
  
  const adminInfoReducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_ADMIN:
        return {
          ...state,
          adminInfo: action.payload,
          adminJustUpdated: false,
        }
      case JUST_UPDATED_ADMIN:
        console.log('JUST UPDATED LOAD')
        return {
          ...state,
          adminInfo: action.payload,
          adminJustUpdated: true,
        }
      case ADMIN_ERROR:
        return {
          ...state,
          errorInfoAdmin: action.payload,
          adminJustUpdated: false,
        }
      case DELETE_SESSION_ADMIN:
        return {
          ...state,
          adminInfo: null,
        }
      default:
        return state
    }
  }
  
  export default adminInfoReducers
  