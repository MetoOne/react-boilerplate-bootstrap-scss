import fetch from 'cross-fetch'

// --- Action types

export const TEST_TEST = 'TEST_TEST';
export const RECEIVE_DUMMY_DATA = 'RECEIVE_DUMMY_DATA';
export const REQUEST_DUMMY_DATA = 'REQUEST_DUMMY_DATA';
const API_URL = 'https://jsonplaceholder.typicode.com/comments?postId=1';

// --- Action creators

export function test(name) {
  return {
    type: TEST_TEST,
    name,
  };
}

export function requestData() {
  return {
    type: REQUEST_DUMMY_DATA  
  }
}

function receiveData(json) {
  return {
    type: RECEIVE_DUMMY_DATA,
    data: json
  }
}

export function fetchData() {
  return dispatch => {
    dispatch(requestData())
    return fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json)))
  }
}