import React from 'react';
import { CommentListBox } from './CommentList.styles';
import CommentComponent from '../Comment/Comment';
import { useComments } from '@/hooks/useComments';

function CommentList() {
  const { comments } = useComments();

  return (
    <CommentListBox data-testid="comment-list">
      {comments.map((comment) => (
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
    </CommentListBox>
  );
}

export default CommentList;
