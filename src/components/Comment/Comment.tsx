import React from 'react';
import TimeAgo from 'react-timeago';

import {
  CommentBox,
  CommentElements,
  CommentHeader,
  ProfilePicture,
} from './Comment.styles';

import Photo from '@/assets/avatars/image-amyrobson.png';
import IconReply from '@/assets/icon-reply.svg';
import Counter from './Counter';

interface CommentProps {
  username: string;
  datetime: Date;
}

function Comment({ username, datetime }: CommentProps) {
  return (
    <CommentBox>
      <Counter />
      <CommentElements>
        <CommentHeader data-testid="heading">
          <div>
            <ProfilePicture src={Photo} alt="profile picture" />
            <p>{username}</p>
            <TimeAgo date={datetime} />
          </div>
          <button>
            <img src={IconReply} alt="icon reply" /> Reply
          </button>
        </CommentHeader>
        <p data-testid="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          minima.
        </p>
      </CommentElements>
    </CommentBox>
  );
}

export default Comment;
