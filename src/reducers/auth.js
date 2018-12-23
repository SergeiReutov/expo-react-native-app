import { AUTH } from '~/actions/ActionTypes';

const initialState = {
  isLoading: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: initialState.error,
      };
    case AUTH.LOGIN.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
      };
    case AUTH.LOGIN.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
