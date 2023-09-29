import React from 'react';

import {
  CommentBox,
  CommentContent,
  CommentElements,
  CommentHeader,
  CreatedAt,
  ProfilePicture,
  ReplyButton,
} from './Comment.styles';

import { IComment } from '@/context/Comment/Comments.constants';
import IconReply from '@/assets/icon-reply.svg';
import Counter from './Counter';

function Comment({ username, datetime, content, profilePicture }: IComment) {
  return (
    <CommentBox>
      <Counter />
      <CommentElements>
        <CommentHeader data-testid="heading">
          <div>
            <ProfilePicture src={profilePicture} alt="profile picture" />
            <p>{username}</p>
            <CreatedAt date={datetime} />
          </div>
          <ReplyButton>
            <img src={IconReply} alt="icon reply" /> Reply
          </ReplyButton>
        </CommentHeader>
        <CommentContent data-testid="content">{content}</CommentContent>
      </CommentElements>
    </CommentBox>
  );
}

export default Comment;
