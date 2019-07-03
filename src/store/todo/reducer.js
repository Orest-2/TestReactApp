import {
  TODO_REQUEST_STARTED,
  TODO_REQUEST_SUCCESS,
  TODO_REQUEST_FAILURE,
  TODO_REQUEST_UPDATE
} from './actions';

const initialState = {
  items: {},
  error: null,
  isLoading: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST_STARTED: {
      return { ...state, isLoading: false };
    }
    case TODO_REQUEST_SUCCESS: {
      const res = payload.reduce((obj, val) => {
        obj[val.id] = val;
        return obj;
      }, {});

      return {
        ...state,
        items: res,
        isLoading: true
      };
    }
    case TODO_REQUEST_FAILURE: {
      return { ...state, error: payload, isLoading: false };
    }
    case TODO_REQUEST_UPDATE: {
      return {
        ...state,
        items: { ...state.items, [payload.id]: payload },
        isLoading: true
      };
    }
    default:
      return state;
  }
};
