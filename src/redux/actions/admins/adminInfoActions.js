import { GET_ADMIN, ADMIN_ERROR, JUST_UPDATED_ADMIN, ADMIN_LOGOUT } from "../types";

export const fetchInfo = () => async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/add3v/v1/whoami`,
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
          type: ADMIN_LOGOUT,
        })
        return
      }

      if (result.status === 'OK') {
        dispatch({
          type: GET_ADMIN,
          payload: result.data,
        })
        
      } else {
        dispatch({
          type: ADMIN_ERROR,
          payload: result.message,
        })
      }
    } catch (error) {
      // usersError(error.message);
      dispatch({
        type: ADMIN_ERROR,
        payload: error,
      })
    }
  }