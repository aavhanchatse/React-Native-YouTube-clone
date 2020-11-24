import {act} from 'react-test-renderer';

const initialState = false;

export const ThemeReducer = (state = initialState, action) => {
  if (action.type == 'change_theme') {
    return action.payload;
  }
  return state
};
