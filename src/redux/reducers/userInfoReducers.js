import { GET_USER, JUST_UPDATED, USERS_ERROR, DELETE_SESSION_USER } from "../actions/types";

const initialState = {
    userInfo: {},
    userJustUpdated: false,
    errorInfoUser: null,
  }
  
  const userInfoReducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER:
        return {
          ...state,
          userInfo: action.payload,
          userJustUpdated: false,
        }
      case JUST_UPDATED:
        return {
          ...state,
          userInfo: action.payload,
          userJustUpdated: true,
        }
      case USERS_ERROR:
        return {
          ...state,
          errorInfoAdmin: action.payload,
          userJustUpdated: false,
        }
        case DELETE_SESSION_USER:
            localStorage.removeItem('token')
            return {
              ...state,
              userInfo: null,
            }
      default:
        return state
    }
  }
  
  export default userInfoReducers