import React, { useState } from 'react';

import {
  CommentBox,
  CommentElements,
  CommentHeader,
  CreatedAt,
  ProfilePicture,
  YouTitle,
  CommentContent,
} from './Comment.styles';

import { IComment } from '@/context/Comment/Comments.constants';
import { useComments } from '@/hooks/useComments';

import CommentForm from './CommentForm/CommentForm';
import HeaderButtons from './HeaderButtons';
import EditMode from './EditMode';
import Counter from './Counter';
import Replies from '../Replies';

function Comment({
  author,
  author_id,
  datetime,
  content,
  profilePicture,
  id,
}: IComment) {
  const [isEditing, setIsEditing] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const { myProfile, replies } = useComments();

  return (
    <>
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
            <HeaderButtons
              authorId={author_id}
              myProfileId={myProfile.id}
              // Props para el editing mode
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              // Props para el reply mode...
              isReply={isReply}
              setIsReply={setIsReply}
            />
          </CommentHeader>
          {isEditing ? (
            <EditMode cContent={content} setIsEditing={setIsEditing} cId={id} />
          ) : (
            <CommentContent>{content}</CommentContent>
          )}
        </CommentElements>
      </CommentBox>

      {/* Para cuando le de click al boton de reply */}
      {isReply && (
        <CommentForm
          commentReplyId={id}
          replyUsername={author}
          setIsReply={setIsReply}
          replyMode
        />
      )}

      {/* Para cuando tenga repuestas el comentario */}
      {replies.filter((reply) => reply.commentParentId === id).length > 0 ? (
        <Replies commentParentId={id} />
      ) : null}
    </>
  );
}

export default Comment;
