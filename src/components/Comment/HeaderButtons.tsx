import React from 'react';

import IconDelete from '@/assets/icon-delete.svg';
import IconReply from '@/assets/icon-reply.svg';
import IconEdit from '@/assets/icon-edit.svg';

import { Button } from './Comment.styles';

interface HeaderButtonsProps {
  myProfileId: string;
  authorId: string;
}

function HeaderButtons({ myProfileId, authorId }: HeaderButtonsProps) {
  return (
    <div>
      {/* TODO Refactorizar esto porque se ve feo */}
      {authorId === myProfileId ? (
        <>
          <Button deletemode>
            <img src={IconDelete} alt="icon delete" /> Delete
          </Button>
          <Button>
            <img src={IconEdit} alt="icon edit" /> Edit
          </Button>
        </>
      ) : (
        <Button>
          <img src={IconReply} alt="icon reply" /> Reply
        </Button>
      )}
    </div>
  );
}

export default HeaderButtons;
