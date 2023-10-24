/* eslint-disable no-case-declarations */
import { Actions, CommentsContextState } from './Comments.constants';

// Reducers para los comentarios
export const CommentsReducer = (
  state: CommentsContextState,
  action: Actions
): CommentsContextState => {
  switch (action.type) {
    case 'NEW_COMMENT':
      return { ...state, comments: [...state.comments, action.payload] };
    case 'UPDATE_COMMENT':
      const commentId = action.payload.comment_id;
      const commentContent = action.payload.content;

      const findCommentIndex = state.comments.findIndex(
        (comment) => comment.id === commentId
      );

      state.comments[findCommentIndex].content = commentContent;
      return { ...state };
    case 'DELETE_COMMENT':
      const newComments = state.comments.filter(
        (comment) => comment.id !== action.payload.commentId
      );

      const newReplies = state.replies.filter(
        (comment) => comment.id !== action.payload.commentId
      );

      return { ...state, comments: newComments, replies: newReplies };
    case 'REPLY_COMMENT':
      return { ...state, replies: [...state.replies, action.payload] };
    default:
      return state;
  }
};
