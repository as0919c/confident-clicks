import { CHANGE_MODAL, NEW_QUESTION, CHOOSE_OPTION, CHANGE_SCORE } from "../hooks/types";
import data from "../data/game.json";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        currentScore: state.currentScore - (action.payload.score),
      };
    case CHOOSE_OPTION:
      return {
        ...state,
        option: action.payload.option,
      };
    case NEW_QUESTION:
      let id = action.payload.question
      return {
        ...state,
        question: state.data.questions[id],
      };

    default:
      return state;
  }
};

export const initialState = {
  modal: false,
  data,
  question: data.questions[1],
  option: { score: null },
  visited: null,
  topScore: 21,
  currentScore: 21
};
