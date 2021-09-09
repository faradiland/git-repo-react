import * as types from '../types';

const initialState = {
  userGit: '',
  repoList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_FETCH_REPO:
      return {
        ...state,
        repoList: action.payload
      };
    case types.HANDLE_STATE: {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    default:
      return state;
  }
}
