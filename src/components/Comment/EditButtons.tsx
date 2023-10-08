import React from 'react';
import { EditModeButtonsBox } from './Comment.styles';
import { ButtonForm } from '../shared/ButtonForm';

interface EditButtons {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditButtons({ isEditing, setIsEditing }: EditButtons) {
  return (
    isEditing && (
      <EditModeButtonsBox>
        {/* TODO: Falta hacer funcional el boton de update para actualizar el comentario en el contexto */}
        <ButtonForm $blue>Update</ButtonForm>
        <ButtonForm onClick={() => setIsEditing(false)} $red>
          Cancel
        </ButtonForm>
      </EditModeButtonsBox>
    )
  );
}

export default EditButtons;
