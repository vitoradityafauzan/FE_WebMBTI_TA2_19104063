import { GET_USER, JUST_UPDATED, USERS_ERROR, DELETE_DATA_USER, LOGOUT } from "./types";

export const fetchInfo = () => async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/api/v1/user/whoami`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
  
      const result = await response.json()
  
      /* check if token expired */
      if (result.message === 'Token Expired') {
        dispatch({
          type: LOGOUT,
        })
        return
      }

      if (result.status === 'OK') {
        dispatch({
          type: GET_USER,
          payload: result.data,
        })
        
      } else {
        dispatch({
          type: USERS_ERROR,
          payload: result.message,
        })
        return
      }
    } catch (error) {
      dispatch({
        type: USERS_ERROR,
        payload: error,
      })
    }
  }