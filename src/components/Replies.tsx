import React from 'react';
import { CommentsList } from './shared/CommentsList';
import { useComments } from '@/hooks/useComments';
import CommentComponent from './Comment/Comment';
import styled from 'styled-components';

interface RepliesProps {
  commentParentId: string;
}

const RepliesList = styled(CommentsList)`
  padding-left: 2rem;
  margin-left: 2.5rem;
  border-left: 3px solid #00000014;
`;

function Replies({ commentParentId }: RepliesProps) {
  const { replies } = useComments();

  return (
    <RepliesList data-testid="comment-list">
      {replies
        .filter((reply) => reply.commentParentId === commentParentId)
        .map((comment) => (
          <CommentComponent
            author={comment.author}
            datetime={comment.datetime}
            content={comment.content}
            profilePicture={comment.profilePicture}
            author_id={comment.author_id}
            id={comment.id}
            key={comment.id}
          />
        ))}
    </RepliesList>
  );
}

export default Replies;
