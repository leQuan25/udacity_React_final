import { saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const TOGGLE_QUESTIONS = "TOGGLE_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";

function addQuestions(question) {
    return {
      type: ADD_QUESTIONS,
      question,
    };
  }

  export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
  
      return saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser,
      })
        .then((question) => dispatch(addQuestions(question)));
    };
  }

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

