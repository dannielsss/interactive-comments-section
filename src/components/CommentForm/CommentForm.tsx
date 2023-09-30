import React, { FormEvent, useContext, useState } from 'react';
import { CommentsContext } from '@/context/Comment/Comments.context';
import { v4 as uuidv4 } from 'uuid';
import {
  CommentFormBox,
  CommentProfilePicture,
  CommentSendButton,
  CommentTextarea,
} from './CommentForm.styles';

function CommentForm() {
  const { myProfile, dispatch } = useContext(CommentsContext);
  const [error, setError] = useState(false);
  const [comment, setComment] = useState('');

  const onCommentButtonClick = (e: FormEvent) => {
    e.preventDefault();

    // Validar el textarea
    if (comment.length === 0) return setError(true);

    dispatch({
      type: 'NEW_COMMENT',
      payload: {
        id: uuidv4(),
        content: comment,
        datetime: new Date(),
        profilePicture: myProfile.profilePicture,
        author: myProfile.username,
        author_id: myProfile.id,
      },
    });
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
        onChange={(e) => setComment(e.target.value)}
        error={error ? true : undefined}
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
