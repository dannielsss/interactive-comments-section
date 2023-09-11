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
            <CreatedAt date={datetime} />
          </div>
          <ReplyButton>
            <img src={IconReply} alt="icon reply" /> Reply
          </ReplyButton>
        </CommentHeader>
        <CommentContent data-testid="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          perspiciatis reprehenderit, possimus, vel animi cupiditate laudantium
          magni unde exercitationem illum modi non neque facere cumque quisquam?
          Officiis itaque facilis consequatur temporibus aspernatur placeat ea
          eveniet qui cumque perferendis, exercitationem sunt molestiae, esse
          velit! Asperiores enim velit molestiae commodi voluptas.
        </CommentContent>
      </CommentElements>
    </CommentBox>
  );
}

export default Comment;
