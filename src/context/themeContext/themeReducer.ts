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
        ...action.payload,
      };

    case 'changeToLight':
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
