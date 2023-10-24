import React from 'react';
import { ButtonForm } from '../shared/ButtonForm';
import {
  ToastButtons,
  ToastContainer,
  ToastContent,
  ToastText,
  ToastTitle,
} from './ToastDeleteComment.styles';
import { useCommentsActions } from '@/hooks/useComments';

interface ToastDeleteCommentProps {
  show: boolean;
  commentId: string;
  setShowRemoveToast: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToastDeleteComment({
  show,
  setShowRemoveToast,
  commentId,
}: ToastDeleteCommentProps) {
  const { deleteComment } = useCommentsActions();

  const onHiddenToast = () => setShowRemoveToast(false);
  const onDeleteComment = () => {
    setShowRemoveToast(false);
    deleteComment(commentId);
  };

  return (
    show && (
      <ToastContainer>
        <ToastContent>
          <ToastTitle>Delete comment</ToastTitle>
          <ToastText>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone
          </ToastText>
          <ToastButtons>
            <ButtonForm onClick={onHiddenToast} $weight={400} $width="100%">
              NO, CANCEL
            </ButtonForm>
            <ButtonForm
              onClick={onDeleteComment}
              $weight={400}
              $width="100%"
              $red
            >
              YES, DELETE
            </ButtonForm>
          </ToastButtons>
        </ToastContent>
      </ToastContainer>
    )
  );
}

export default ToastDeleteComment;
