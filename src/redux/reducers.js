import { combineReducers } from 'redux';
import Immutable from 'immutable';

import {
  TEST_TEST,
  RECEIVE_DUMMY_DATA,
  REQUEST_DUMMY_DATA
} from './actions';

const initialState = {
  isFetching: false,
  responceData: [],
  test: Immutable.List(),
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST_TEST:
      return {
        ...state,
        test: state.test.push(action.name),
      };

    default:
      return state;
  }
}

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DUMMY_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DUMMY_DATA:
      return {
        ...state,
        isFetching: false,
        responceData: action.data,
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reducer,
  dataReducer
})

export default rootReducer;
