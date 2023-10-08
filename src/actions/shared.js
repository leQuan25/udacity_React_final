import { getInitialData, getUsers, saveQuestionAnswer } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions, TOGGLE_QUESTIONS } from "./questions";
import {TOGGLE_USERS} from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
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

function toggleQuestion({ qid, authedUser, answer }) {
  return {
    type: TOGGLE_QUESTIONS,
    qid,
    authedUser,
    answer,
  };
}

function toggleUser({ qid, authedUser, answer }) {
  return {
    type: TOGGLE_USERS,
    qid,
    authedUser,
    answer,
  };
}

export function handleToggleQuestion(info) {
  return (dispatch) => {
    dispatch(toggleQuestion(info));
    dispatch(toggleUser(info));
    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handleToggleQuestion: ", e);
      dispatch(toggleQuestion(info));
      dispatch(toggleUser(info));
      alert("The was an error choosing the answer. Try again.");
    });
  };
}
