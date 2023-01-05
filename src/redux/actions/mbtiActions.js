import { GET_TESTS, JUST_SUBMITED, MBTI_ERROR, ON_SUBMITING } from "./types";

import Swal from "sweetalert2";
console.log("MBTI ACTION RUN");

/** Login Action  */

/** Error Handling  */
const mbtiError = (error) => async (dispatch) => {
  console.lof('mbtiError')
  dispatch({
    type: MBTI_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: MBTI_ERROR,
      payload: null,
    });
  }, 15000);
};

 async function testingg(tempp) {
  console.log('mbti action, testingg runs');

  console.log(tempp[4])

  /* return tempp.map(() => {
    
  }) */
  
  let temp = [{}];
  
  for (let z = 0; z < 11; z++) {
    console.log('mbti action, testingg loops runs, ', tempp[z]);
    temp[z] = tempp[z];
  }

  console.log('mbti action, testingg result, ', temp)

  return temp;
}

export const fetchTests = () => async (dispatch) => {
  try {
    console.log("ACTION fetchTests RUNS");
    
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/v1/list-tests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultTest = await response.json();

    let testingResult = '';

    testingResult = await testingg(resultTest.data);

    console.log("REACT ACTION, mbti test, ", testingResult);

    if (resultTest) {
      dispatch({
        type: GET_TESTS,
        // payload: resultTest,
        payload: testingResult,
      });

    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: "Tests Data Not Found",
        showConfirmButton: false,
        timer: 2000,
      });
      mbtiError(resultTest.error);
    }
  } catch (error) {
    mbtiError(error);
  }
};

export const setUserCharacteristic = (data) => async (dispatch) => {
  dispatch({
    type: ON_SUBMITING,
  });

  let errr = false;
  let charac = '';
  let noErr = '';

  try {
    console.log('mbti submit Action Running')

    let i, e, n, s, f, t, p, j;

    i = e = n = s = f = t = p = j = 0;

    const countPoint = async (value) => {
      switch (value) {
        case 'i':
         return i++;
          break;
        case 'e':
         return e++;
          break;
        case 'n':
         return n++;
          break;
        case 's':
         return s++;
          break;
        case 'f':
         return f++;
          break;
        case 't':
         return t++;
          break;
        case 'p':
         return p++;
          break;
        case 'j':
         return j++;
          break;
        default:
          return errr = true;
          break;
      }
    }

    if (errr) {
      // mbtiError('Answer Point Not Recognized!');
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: 'Answer Point Not Recognized!',
        showConfirmButton: false,
        timer: 2000,
      });

      dispatch({
        type: MBTI_ERROR,
        payload: errr.message,
      });

      return;
    }

    for (let k=0; k<data.length; k++) {
      console.log('Forr')
      if (data[k].answer[0].checked === true) {
        console.log('forr 0 true')
        countPoint(data[k].answer[0].point)
      } 
      else if (data[k].answer[1].checked === true) {
        console.log('forr 1 true')
        countPoint(data[k].answer[1].point)
      } 
      else {
        console.log('forr error');
        errr = true;
        noErr = data[k].idQuestion;
        break;
      }
    }

    console.log('mbti action, after loop')

    if (errr) {
      console.log('mbti action, err after loop')
      // await mbtiError('Answer Point Not Recognized!');
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: `Soal ${noErr} Belum Dijawab!`,
        showConfirmButton: false,
        timer: 2000,
      });

      dispatch({
        type: MBTI_ERROR,
        payload: errr.message,
      });

      return;
    }

    if (e > i) {
      charac += "E"
    } else {
      charac += "I"
    }

    if (n > s) {
      charac += "N"
    } else {
      charac += "S"
    }

    if (t > f) {
      charac += "T"
    } else {
      charac += "F"
    }

    if (p > j) {
      charac += "P"
    } else {
      charac += "J"
    }

    console.log('RESULT mbti action submit, ', charac)

    if (charac === null || charac === undefined) {
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: "Chara",
        showConfirmButton: false,
        timer: 1000,
      });

    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        titleText: `Charac, ${charac}`,
        showConfirmButton: false,
        timer: 1000,
      });
    }

    /* const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: charac,
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
        type: JUST_SUBMITED,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: "Gagal registrasi atau email telah digunakan",
        showConfirmButton: false,
        timer: 1000,
      });
      mbtiError(result.error);
    } */
  } catch (error) {
    // mbtiError(error);
    Swal.fire({
      position: "center",
      icon: "warning",
      titleText: `${error}`,
      showConfirmButton: false,
      timer: 1000,
    });

    dispatch({
      type: MBTI_ERROR,
      payload: error.message,
    });
  
    setTimeout(() => {
      dispatch({
        type: MBTI_ERROR,
        payload: null,
      });
    }, 15000);
  }
};




