import { RECEIVE_QUESTIONS, TOGGLE_QUESTIONS, ADD_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
    return {
        ...state,
        questions: action.questions,
      };

      case TOGGLE_QUESTIONS:
      return {
        ...state,
        [action.qid]: {
            ...state.questions[action.qid],
            optionOne:
                action.answer === 'optionOne' ? state.questions[action.qid].optionOne.votes.concat([action.authedUser]) : state.questions[action.qid].votes,
            optionTwo:
                action.answer === 'optionTwo' ? state.questions[action.qid].optionTwo.votes.concat([action.authedUser]) : state.questions[action.qid].votes,
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
