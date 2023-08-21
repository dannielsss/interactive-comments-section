import React, { useState } from 'react';
import TimeAgo from 'react-timeago';

import Photo from '@/assets/avatars/image-amyrobson.png';
import IconReply from '@/assets/icon-reply.svg';

interface CommentProps {
  username: string;
  datetime: Date;
}

function Comment({ username, datetime }: CommentProps) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div data-testid="counter">
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        <p data-testid="counter-text">{counter}</p>
        <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      </div>
      <header data-testid="heading">
        <img src={Photo} alt="profile picture" />
        {username}
        <TimeAgo date={datetime} />
        <button>
          <img src={IconReply} alt="icon reply" /> Reply
        </button>
      </header>
      <p data-testid="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
        minima.
      </p>
    </div>
  );
}

export default Comment;
