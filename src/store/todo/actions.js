export const TODO_REQUEST_STARTED = 'TODO_REQUEST_STARTED';
export const TODO_REQUEST_SUCCESS = 'TODO_REQUEST_SUCCESS';
export const TODO_REQUEST_FAILURE = 'TODO_REQUEST_FAILURE';
export const TODO_REQUEST_UPDATE = 'TODO_REQUEST_UPDATE';

export const todoRequestStarted = () => dispatch => {
  dispatch({
    type: TODO_REQUEST_STARTED
  });

  fetch('https://jsonplaceholder.typicode.com/todos').then(async res => {
    const data = await res.json();

    if (res.ok) {
      dispatch(todoRequestSuccess(data));
    } else {
      dispatch(todoRequestFailure(data));
    }
  });
};

export const todoRequestSuccess = payload => ({
  type: TODO_REQUEST_SUCCESS,
  payload
});

export const todoRequestFailure = payload => ({
  type: TODO_REQUEST_FAILURE,
  payload
});

export const todoRequestUpdate = payload => ({
  type: TODO_REQUEST_UPDATE,
  payload
});
