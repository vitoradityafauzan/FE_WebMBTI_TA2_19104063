import {
    /* Admin Auth states */
      ADMIN_AUTH_ERROR,
      ADMIN_isGOOGLELOGIN,
      ADMIN_LOGIN,
      ADMIN_LOGOUT,
      ADMIN_isREGISTER,
    } from '../../actions/types'
    
    const initialState = {
      adminIsAuthenticated: !!localStorage.getItem('token'),
      adminToken: localStorage.getItem('token'),
      isSuper: false,
      errorAuthAdmin: null,
    }
    
    const adminAuthReducer = (state = initialState, action) => {
      switch (action.type) {
        case ADMIN_isREGISTER:
          return {
            ...state,
            adminToken: null,
            errorAuthAdmin: null,
          }
        case ADMIN_isGOOGLELOGIN:
          localStorage.setItem('token', action.payload)
          console.log("ADMIN AUTH REDUCERS, ", action.payload)
          return {
            ...state,
            adminIsAuthenticated: true,
            adminToken: action.payload.token,
            isSuper: action.payload.isSuper,
            errorAuthAdmin: null,
          }
        case ADMIN_LOGIN:
          localStorage.setItem('token', action.payload)
          return {
            ...state,
            adminIsAuthenticated: true,
            adminToken: action.payload,
            errorAuthAdmin: null,
          }
        case ADMIN_LOGOUT:
          localStorage.removeItem('token')
          return {
            ...state,
            adminIsAuthenticated: false,
            adminToken: null,
            errorAuthAdmin: null,
          }
        case ADMIN_AUTH_ERROR:
          localStorage.removeItem('token')
          return {
            ...state,
            adminIsAuthenticated: false,
            adminToken: null,
            errorAuthAdmin: action.payload,
          }
        default:
          return state
      }
    }
    
    export default adminAuthReducer