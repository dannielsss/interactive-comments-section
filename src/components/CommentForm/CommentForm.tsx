import React, { FormEvent, useContext, useRef, useState } from 'react';
import { CommentsContext } from '@/context/Comment/Comments.context';
import { v4 as uuidv4 } from 'uuid';
import {
  CommentFormBox,
  CommentProfilePicture,
  CommentSendButton,
  CommentTextarea,
} from './CommentForm.styles';

function CommentForm() {
  const elementCommentTextarea = useRef<HTMLTextAreaElement>(null);
  const { myProfile, dispatch } = useContext(CommentsContext);
  const [error, setError] = useState(false);

  const onCommentButtonClick = (e: FormEvent) => {
    e.preventDefault();

    // Validar el textarea
    if (
      !elementCommentTextarea.current ||
      !elementCommentTextarea.current.value
    )
      return setError(true);

    dispatch({
      type: 'NEW_COMMENT',
      payload: {
        id: uuidv4(),
        content: elementCommentTextarea.current.value,
        datetime: new Date(),
        profilePicture: myProfile.profilePicture,
        author: myProfile.username,
        author_id: myProfile.id,
      },
    });

    elementCommentTextarea.current.value = '';
    setError(false);
  };

  return (
    <CommentFormBox role="form">
      <CommentProfilePicture
        src={myProfile.profilePicture}
        alt="profile picture"
      />
      <CommentTextarea
        cols={30}
        rows={10}
        data-testid="comment-input"
        placeholder="Add a comment"
        ref={elementCommentTextarea}
        $error={error}
      ></CommentTextarea>
      <CommentSendButton
        type="submit"
        data-testid="send-button"
        onClick={onCommentButtonClick}
      >
        SEND
      </CommentSendButton>
    </CommentFormBox>
  );
}

export default CommentForm;
