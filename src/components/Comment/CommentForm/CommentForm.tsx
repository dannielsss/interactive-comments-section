import React, { FormEvent, useRef, useState } from 'react';
import { useCommentsActions, useComments } from '@/hooks/useComments';
import { ButtonForm } from '../../shared/ButtonForm';
import {
  CommentFormBox,
  CommentProfilePicture,
  CommentTextarea,
} from './CommentForm.styles';

interface CommentFormProps {
  replyMode?: boolean;
  replyUsername?: string;
  commentReplyId?: string;
  setIsReply?: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentForm({
  replyMode,
  replyUsername,
  commentReplyId,
  setIsReply,
}: CommentFormProps) {
  const elementCommentTextarea = useRef<HTMLTextAreaElement>(null);
  const { newComment, newReply } = useCommentsActions();
  const { myProfile } = useComments();

  const [error, setError] = useState(false);

  const onButtonClick = (e: FormEvent) => {
    e.preventDefault();

    // Validar el textarea
    if (
      !elementCommentTextarea.current ||
      !elementCommentTextarea.current.value
    )
      return setError(true);

    const commentContent = elementCommentTextarea.current.value.trim();

    if (replyMode && setIsReply && commentReplyId) {
      newReply(commentContent, commentReplyId);
      setIsReply(false);
      setError(false);
      elementCommentTextarea.current.value = '';
      return;
    }

    newComment(commentContent);
    setError(false);
    elementCommentTextarea.current.value = '';
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
        defaultValue={replyMode && replyUsername ? `@${replyUsername} ` : ''}
        ref={elementCommentTextarea}
        $error={error}
      ></CommentTextarea>
      <ButtonForm
        type="submit"
        data-testid="send-button"
        onClick={onButtonClick}
        $blue
      >
        {replyMode ? 'REPLY' : 'SEND'}
      </ButtonForm>
    </CommentFormBox>
  );
}

export default CommentForm;
