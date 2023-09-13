import React from 'react';
import ProfilePicture from '@/assets/avatars/image-ramsesmiron.png';
import {
  CommentFormBox,
  CommentProfilePicture,
  CommentSendButton,
  CommentTextarea,
} from './CommentForm.styles';

function CommentForm() {
  return (
    <CommentFormBox role="form">
      <CommentProfilePicture src={ProfilePicture} alt="profile picture" />
      <CommentTextarea
        cols={30}
        rows={10}
        data-testid="comment-input"
        placeholder="Add a comment"
      ></CommentTextarea>
      <CommentSendButton type="submit" data-testid="send-button">
        SEND
      </CommentSendButton>
    </CommentFormBox>
  );
}

export default CommentForm;
