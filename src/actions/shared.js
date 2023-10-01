import { getInitialData, getUsers } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
// import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    // dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    //   dispatch(hideLoading());
    });
  };
}


export function getAllUser() {
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  }
}
