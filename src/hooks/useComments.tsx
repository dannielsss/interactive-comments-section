import { CommentsContext } from '@/context/Comment/Comments.context';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';

// Hook para obtener los datos del contexto
export const useComments = () => {
  return useContext(CommentsContext);
};

// Hook para realizar acciones del hook principal
export const useCommentsActions = () => {
  const { myProfile, dispatch } = useContext(CommentsContext);

  const newComment = (content: string) => {
    dispatch({
      type: 'NEW_COMMENT',
      payload: {
        id: uuidv4(),
        content: content,
        datetime: new Date(),
        profilePicture: myProfile.profilePicture,
        author: myProfile.username,
        author_id: myProfile.id,
      },
    });
  };

  const newReply = (content: string, commentParentId: string) => {
    dispatch({
      type: 'REPLY_COMMENT',
      payload: {
        id: uuidv4(),
        content: content,
        datetime: new Date(),
        profilePicture: myProfile.profilePicture,
        author: myProfile.username,
        author_id: myProfile.id,
        commentParentId: commentParentId,
      },
    });
  };

  return { newComment, newReply };
};
