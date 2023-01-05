import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBeforeAuth from "../Components/NavigationBar/NavBeforeAuth";
import NavAfterAuth from "../Components/NavigationBar/NavAfterAuth";
import Footter from "../Components/Footter";
import Swal from "sweetalert2";
import "../public/css/style.css";
import { fetchTests, setUserCharacteristic } from "../redux/actions/mbtiActions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Navigate } from "react-router-dom";

async function toggleOptions(id, answer, testList) {
  /* if (id[1] === 0 || id[1] === '0') {
    return testList.map((test) =>
    test.idQuestion === id ? test.answer[0].checked = checked : test
    );
  }
  console.log('checked') */

  /* let result; */

  console.log(id);

  // const checked = true

  if (answer === "a") {
    /* result = testList.map((test) => (test.idQuestion == id ? {...test, checked} : test)); */

    testList[id - 1].answer[0].checked = true;
    testList[id - 1].answer[1].checked = false;

    return testList;
  }

  if (answer === "b") {
    /* result = testList.map((test) => (test.idQuestion == id ? {...test, checked} : test));
    
    return result; */

    testList[id - 1].answer[1].checked = true;
    testList[id - 1].answer[0].checked = false;

    return testList;
  }
}

const MbtiTestUser = () => {
  const dispatch = useDispatch(0);

  const { isAuthenticated, errorAuth } = useSelector((state) => state.auth);
  const { tests, submitted, errorMbti } = useSelector((state) => state.mbti);

  const [isLoading, setLoading] = useState("");
  const [testList, setTest] = useState();
  const [choose, setChoose] = useState();
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchTests());
    } /* else {
      alert("User Data Not Found !");
    } */
    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    setLoading(submitted);

  }, [submitted]);

  useEffect(() => {
    if (isLoading === "loading") {
      Swal.fire({
        title: "Sedang memproses hasil",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }

    if (isLoading === "finished") {
      Swal.fire({
        position: "center",
        icon: "success",
        titleText: "Test berhasil disubmit",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

  useEffect(() => {
    if (tests) {
      // console.log(tests.data);
      setTest(tests);
    }
  }, [tests]);

  useEffect(() => {
    // console.log(testList);
    setResult(testList);
  });

  let no = 1;
  let k = 1;
  let a = `a${k}`;
  let q = `q-${k}`;

  const handleRadio = async (id) => {
    // await setResult(testList)
    // e.preventDefault();

    console.log(`Type of, `, typeof id);

    setChoose(id);

    const newId = id.split("-");

    // const newTests = toggleOptions(newId, checked);
    const newTests = await toggleOptions(newId[0], newId[1], testList);

    setResult(newTests);

    console.log(result);
  };

  /* const handleRadio = (e) => {
    e.preventDefault()
    setChoose(e.target.value)
    console.log(`choose, ${choose}`)
  }; */

  /* const handleRadio = (qn, an) => {
    console.log(`inside handleRadio, q: ${qn}, a: ${an}`);

    const indeks = choose.map((c) => c.question).indexOf(qn);

    console.log(`indeks, ${indeks}`);

    if (choose[indeks] !== undefined && choose[indeks] !== null) {
      console.log("true");
      choose[indeks].answer = an;
    } else {
      console.log("false");
      setChoose([...choose, { question: qn, answer: an }]);
    }

    console.log(choose);
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (result !== null || result !== undefined) {
      dispatch(setUserCharacteristic(result));
    }
  };

  useEffect(() => {
    if (errorAuth) {
      alert(errorAuth);
    }
  }, [errorAuth]);

  useEffect(() => {
    if (errorMbti) {
      console.log('mbti page, error mbti')
      alert(errorMbti);
    }
  }, [errorMbti]);

  return (
    <>
      {/** To Check Authentication Status */}
      {!isAuthenticated ? (
        /**  Render If Not Authenticated */
        // <NavBeforeAuth />
        <div className="w-full" id="header">
          <NavBeforeAuth />
        </div>
      ) : (
        /** Render If Authenticated */
        // <NavAfterAuth />
        <div className="w-full" id="header">
          <NavAfterAuth />
        </div>
      )}

      {isLoading === "finished" ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="container w-full md:w-[95%] md:my-4 p-1 md:mx-auto grid">
            <div className="border-4 border-sky-700 mb-4 p-2">
              Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
            </div>
            <form onSubmit={handleSubmit}>
              <div className="container w-full grid grid-cols-2 gap-x-1.5 gap-y-7">
                {!testList ? (
                  <>
                    <div className="border-4 border-slate-100 p-3">
                      <Skeleton count={1} />
                      <br />
                      <div className="grid grid-cols-2 gap-x-1.5">
                        <Skeleton count={1} />
                        <Skeleton count={1} />
                      </div>
                    </div>
                    <div className="border-4 border-slate-100 p-3">
                      <Skeleton count={1} />
                      <br />
                      <div className="grid grid-cols-2 gap-x-1.5">
                        <Skeleton count={1} />
                        <Skeleton count={1} />
                      </div>
                    </div>
                    <div className="border-4 border-slate-100 p-3">
                      <Skeleton count={1} />
                      <br />
                      <div className="grid grid-cols-2 gap-x-1.5">
                        <Skeleton count={1} />
                        <Skeleton count={1} />
                      </div>
                    </div>
                    <div className="border-4 border-slate-100 p-3">
                      <Skeleton count={1} />
                      <br />
                      <div className="grid grid-cols-2 gap-x-1.5">
                        <Skeleton count={1} />
                        <Skeleton count={1} />
                      </div>
                    </div>
                    <div className="border-4 border-slate-100 p-3">
                      <Skeleton count={1} />
                      <br />
                      <div className="grid grid-cols-2 gap-x-1.5">
                        <Skeleton count={1} />
                        <Skeleton count={1} />
                      </div>
                    </div>
                    <div className="border-4 border-slate-100 p-3">
                      <Skeleton count={1} />
                      <br />
                      <div className="grid grid-cols-2 gap-x-1.5">
                        <Skeleton count={1} />
                        <Skeleton count={1} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {testList.map((list) => (
                      <fieldset className="flex flex-col gap-4 border-4 rounded-xl p-3" id={`radio-${a}`} key={a}>
                        <legend className="mb-3">
                          <span className="font-bold">{no}. </span>
                          {list.questions} .... {q} ... {a}
                        </legend>
                        <div className="flex items-center mb-4">
                          <input
                            id={`q-${list.idQuestion}-a${list.answer[0].answer}`}
                            type="radio"
                            name={a}
                            value={`${list.idQuestion}-a`}
                            onChange={(e) => handleRadio(e.target.value)}
                            checked={choose === `${list.idQuestion}-a`}
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor={`q-${list.idQuestion}-a-${list.answer[0].point}`} className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {list.answer[0].answer}
                            {list.answer[0].checked === true ? <h3>=== Checked===</h3> : <></>}
                          </label>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id={`q-${list.idQuestion}-a${list.answer[1].answer}`}
                            type="radio"
                            name={a}
                            value={`${list.idQuestion}-b`}
                            onChange={(e) => handleRadio(e.target.value)}
                            checked={choose === `${list.idQuestion}-b`}
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor={`q-${list.idQuestion}-a-${list.answer[0].point}`} className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {list.answer[1].answer}
                            {list.answer[1].checked === true ? <h3>=== Checked===</h3> : <></>}
                          </label>
                        </div>

                        <div hidden>
                          {k++}
                          {no++}
                          {(a = `a${k}`)}
                          {(q = `q-${k}`)}
                        </div>
                      </fieldset>
                    ))}
                    <div className="text-center w-full md:w-1/2 pt-2 mb-6 mx-auto">
                      <button
                        className="inline-block  hover:bg-[#8f48cf] bg-[#7126B5] px-6 py-3 text-white font-medium text-sm leading-tight rounded-[16px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="submit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="dark"
                      >
                        Submit
                      </button>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
          {/* <Footter /> */}
          <div className="w-full" id="foottter">
            <Footter />
          </div>
        </>
      )}
    </>
  );
};

export default MbtiTestUser;
