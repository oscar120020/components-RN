import {ThemeState} from './ThemeProvider';

type actionType =
  | {type: 'changeToDark'; payload: ThemeState}
  | {type: 'changeToLight'; payload: ThemeState};

export const themeReducer = (
  state: ThemeState,
  action: actionType,
): ThemeState => {
  switch (action.type) {
    case 'changeToDark':
      return {
        ...state,

      };

    case 'changeToLight':
      return {
        ...state,
      };

    default:
      return state;
  }
};
