import React from 'react';
import { Container } from './components/shared/Container';

import CommentForm from './components/CommentForm/CommentForm';
import Comment from './components/Comment/Comment';

function App() {
  return (
    <Container>
      <Comment datetime={new Date()} username="thedani" />
      <CommentForm />
    </Container>
  );
}

export default App;
