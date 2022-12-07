import {
  /* Auth states */
    AUTH_ERROR,
    isGOOGLELOGIN,
    LOGIN,
    LOGOUT,
    isREGISTER,
  } from '../actions/types'
  
  const initialState = {
    isRegister: false,
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    errorAuth: null,
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case isREGISTER:
        return {
          ...state,
          isRegister: true,
          token: null,
          errorAuth: null,
        }
      case isGOOGLELOGIN:
        localStorage.setItem('token', action.payload)
        return {
          ...state,
          isRegister: true,
          isAuthenticated: true,
          token: action.payload,
          errorAuth: null,
        }
      case LOGIN:
        localStorage.setItem('token', action.payload)
        return {
          ...state,
          isRegister: true,
          isAuthenticated: true,
          token: action.payload,
          errorAuth: null,
        }
      case LOGOUT:
        localStorage.removeItem('token')
        return {
          ...state,
          isAuthenticated: false,
          isRegister: false,
          token: null,
          errorAuth: null,
        }
      case AUTH_ERROR:
        localStorage.removeItem('token')
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          errorAuth: action.payload,
        }
      default:
        return state
    }
  }
  
  export default authReducer
  