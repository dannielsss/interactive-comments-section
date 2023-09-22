import { Actions, CommentsContextState } from './Comments.constants';

// Reducers para los comentarios
export const CommentsReducer = (
  state: CommentsContextState,
  action: Actions
) => {
  switch (action.type) {
    case 'test':
      return { ...state };
    default:
      return state;
  }
};
