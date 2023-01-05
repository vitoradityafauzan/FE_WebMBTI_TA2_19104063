import { ADMIN_AUTH_ERROR, ADMIN_isGOOGLELOGIN, ADMIN_LOGIN, ADMIN_LOGOUT, ADMIN_isREGISTER, DELETE_SESSION_ADMIN } from "../types";

import Swal from "sweetalert2";

/** Login Action  */
export const loginViaForm = (data) => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/add3v/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();

      /* console.log('REACT, login admin, ', result); */

      if (result.token) {
        Swal.fire({
          position: "center",
          icon: "success",
          titleText: "Berhasil Masuk",
          showConfirmButton: false,
          timer: 1000,
        });
        dispatch({
          type: ADMIN_LOGIN,
          payload: result.token,
        });

      } else if (result.message == "Email not found") {
        Swal.fire({
          position: "center",
          icon: "warning",
          titleText: "Email tidak ditemukan !",
          showConfirmButton: false,
          timer: 1000,
        });
        authError(result.error);

      } else if (result.message == "Password incorrect") {
        Swal.fire({
          position: "center",
          icon: "warning",
          titleText: "Password salah !",
          showConfirmButton: false,
          timer: 1000,
        });
        authError(result.error);

      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          titleText: "Gagal login",
          showConfirmButton: false,
          timer: 1000,
        });
        authError(result.error);
      }

    } catch (error) {
      authError(error);
    }
  };

/** Register Action  */
export const registerUser = (data) => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.data) {
        Swal.fire({
          position: "center",
          icon: "success",
          titleText: "Berhasil Registrasi",
          showConfirmButton: false,
          timer: 1000,
        });
        dispatch({
          type: ADMIN_isREGISTER,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          titleText: "Gagal registrasi atau email telah digunakan",
          showConfirmButton: false,
          timer: 1000,
        });
        authError(result.error);
      }
    } catch (error) {
      authError(error);
    }
  };

/** Logout Action  */
export const logout = () => async (dispatch) => {
  dispatch({
    type: ADMIN_LOGOUT,
  })
  dispatch({
    type: DELETE_SESSION_ADMIN,
  })
}

/** Error Handling  */
const authError = (error) => async (dispatch) => {
    dispatch({
      type: ADMIN_AUTH_ERROR,
      payload: error.message,
    });
  
    setTimeout(() => {
      dispatch({
        type: ADMIN_AUTH_ERROR,
        payload: null,
      });
    }, 5000);
  };