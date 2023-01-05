import { GET_TESTS, JUST_SUBMITED, ON_SUBMITING, MBTI_ERROR } from "../actions/types";

const initialState = {
  tests: [],
  submitted: "nothing",
  errorMbti: null,
};

const mbtiReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TESTS:
      return {
        ...state,
        tests: action.payload,
      };
    case JUST_SUBMITED:
      return {
        ...state,
        submitted: "finished",
      };
    case ON_SUBMITING:
      return {
        ...state,
        submitted: "loading",
      };
    case MBTI_ERROR:
      console.log('mbti reducer, error')
      return {
        ...state,
        tests: null,
        submitted: 'nothing',
        errorMbti: action.payload,
      };
    default:
      return state;
  }
};

export default mbtiReducers;
