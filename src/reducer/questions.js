import { RECEIVE_QUESTIONS, TOGGLE_QUESTIONS, ADD_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
    return {
        ...state,
        ...action.questions,
      };

      case TOGGLE_QUESTIONS:
      return {
        ...state,
        [action.qid]: {
            ...state[action.qid],
            optionOne:
                action.answer === 'optionOne' ? {votes: state[action.qid].optionOne.votes.concat([action.authedUser]),text: state[action.qid].optionOne.text}  : {votes: state[action.qid].optionOne.votes,text: state[action.qid].optionOne.text},
            optionTwo:
                action.answer === 'optionTwo' ? {votes: state[action.qid].optionTwo.votes.concat([action.authedUser]),text: state[action.qid].optionTwo.text} : {votes: state[action.qid].optionTwo.votes,text: state[action.qid].optionTwo.text},
        },
      };

     case ADD_QUESTIONS:
        const { questions } = action;
        return {
            ...state,
            ...questions,
        };

    default:
      return state;
  }
}
