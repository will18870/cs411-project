import { combineReducers } from "redux";
// import { SET_CONCERTS } from "../actions/actionTypes";

const initialConcertState = {
  concerts: [],
};
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};

const concertReducer = (state = initialConcertState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case true:
      return { ...state, concerts: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  concert: concertReducer,
});

export default rootReducer;
