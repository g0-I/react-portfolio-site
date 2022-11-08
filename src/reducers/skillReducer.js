import { requestStates } from "../constants";

export const actionTypes = {
  initial: 'INITIAL',
  fetch: 'FETCHING',
  success: 'FETCH_SUCCESS',
  error: 'FETCH_ERROR'
};

export const initialState = {
  languageList: [],
  requestStates: requestStates.idle,
}

export const skillReducer = (
  state, action
) => {
  switch(action.type) {
    case actionTypes.initial: {
      return {
        languageList: [],
        requestStates: requestStates.initial
      }
    }
    case actionTypes.fetch: {
      return {
        ...state,
        requestStates: requestStates.loading
      }
    }
    case actionTypes.success: {
      return {
        languageList: action.payload.languageList,
        requestStates: requestStates.success
      }
    }
    case actionTypes.error: {
      return {
        languageList: [],
        requestStates: requestStates.error
      }
    }
    default: {
      throw new Error()
    }
  }
};
