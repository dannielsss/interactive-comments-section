import { Actions, CommentsContextState } from './Comments.constants';

// Reducers para los comentarios
export const CommentsReducer = (
  state: CommentsContextState,
  action: Actions
): CommentsContextState => {
  switch (action.type) {
    case 'NEW_COMMENT':
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
