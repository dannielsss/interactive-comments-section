import React from 'react';

import IconDelete from '@/assets/icon-delete.svg';
import IconReply from '@/assets/icon-reply.svg';
import IconEdit from '@/assets/icon-edit.svg';

import { Button } from './Comment.styles';

interface HeaderButtonsProps {
  myProfileId: string;
  authorId: string;

  // Props para el editing mode
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;

  // Props para el reply mode
  setIsReply: React.Dispatch<React.SetStateAction<boolean>>;
  isReply: boolean;
}

function HeaderButtons({
  myProfileId,
  authorId,
  setIsEditing,
  isEditing,
  setIsReply,
  isReply,
}: HeaderButtonsProps) {
  return (
    <div>
      {authorId === myProfileId ? (
        <>
          <Button $deletemode={true}>
            <img src={IconDelete} alt="icon delete" /> Delete
          </Button>
          <Button onClick={() => setIsEditing(!isEditing)}>
            <img src={IconEdit} alt="icon edit" /> Edit
          </Button>
        </>
      ) : (
        <Button onClick={() => setIsReply(!isReply)}>
          <img src={IconReply} alt="icon reply" />
          {isReply ? 'Cancel' : 'Reply'}
        </Button>
      )}
    </div>
  );
}

export default HeaderButtons;
