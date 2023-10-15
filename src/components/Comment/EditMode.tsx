import React, { useRef, useState, useContext } from 'react';
import { CommentTextarea, EditModeButtonsBox } from './Comment.styles';
import { CommentsContext } from '@/context/Comment/Comments.context';
import { ButtonForm } from '../shared/ButtonForm';

interface EditModeProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  cContent: string;
  cId: string;
}

function EditMode({ setIsEditing, cContent, cId }: EditModeProps) {
  const elementCommentTextarea = useRef<HTMLTextAreaElement>(null);
  const { dispatch } = useContext(CommentsContext);
  const [error, setError] = useState(false);

  // Cuando le de click en Update...
  const onEditComment = () => {
    if (
      !elementCommentTextarea.current ||
      !elementCommentTextarea.current.value
    )
      return setError(true);

    dispatch({
      type: 'UPDATE_COMMENT',
      payload: {
        content: elementCommentTextarea.current.value,
        comment_id: cId,
      },
    });

    setError(false);
    setIsEditing(false);
  };

  return (
    <>
      <CommentTextarea
        data-testid="content"
        defaultValue={cContent}
        ref={elementCommentTextarea}
        $error={error}
      ></CommentTextarea>
      <EditModeButtonsBox>
        {/* TODO: Falta hacer funcional el boton de update para actualizar el comentario en el contexto */}
        <ButtonForm onClick={onEditComment} $blue>
          Update
        </ButtonForm>
        <ButtonForm onClick={() => setIsEditing(false)} $red>
          Cancel
        </ButtonForm>
      </EditModeButtonsBox>
    </>
  );
}

export default EditMode;
