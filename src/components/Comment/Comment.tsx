import React, { useContext } from 'react';

import {
  CommentBox,
  CommentContent,
  CommentElements,
  CommentHeader,
  CreatedAt,
  ProfilePicture,
  Button,
} from './Comment.styles';

import { CommentsContext } from '@/context/Comment/Comments.context';
import { IComment } from '@/context/Comment/Comments.constants';
import IconDelete from '@/assets/icon-delete.svg';
import IconReply from '@/assets/icon-reply.svg';
import IconEdit from '@/assets/icon-edit.svg';
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
            <CreatedAt date={datetime} />
          </div>
          <div>
            {author_id === myProfile.id ? (
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
        </CommentHeader>
        <CommentContent data-testid="content">{content}</CommentContent>
      </CommentElements>
    </CommentBox>
  );
}

export default Comment;
