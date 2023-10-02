import React, { useContext } from 'react';

import {
  CommentBox,
  CommentContent,
  CommentElements,
  CommentHeader,
  CreatedAt,
  ProfilePicture,
  YouTitle,
} from './Comment.styles';

import { CommentsContext } from '@/context/Comment/Comments.context';
import { IComment } from '@/context/Comment/Comments.constants';

import HeaderButtons from './HeaderButtons';
import Counter from './Counter';

function Comment({
  author,
  author_id,
  datetime,
  content,
  profilePicture,
}: IComment) {
  const { myProfile } = useContext(CommentsContext);

  return (
    <CommentBox>
      <Counter />
      <CommentElements>
        <CommentHeader data-testid="heading">
          <div>
            <ProfilePicture src={profilePicture} alt="profile picture" />
            <p>{author}</p>
            {author_id === myProfile.id ? <YouTitle>you</YouTitle> : null}
            {/* "live" prop in this component is used for automatic update of its value */}
            <CreatedAt date={datetime} />
          </div>
          <HeaderButtons authorId={author_id} myProfileId={myProfile.id} />
        </CommentHeader>
        <CommentContent data-testid="content">{content}</CommentContent>
      </CommentElements>
    </CommentBox>
  );
}

export default Comment;
