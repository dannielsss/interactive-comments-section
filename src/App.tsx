import React from 'react';
import Comment from './components/Comment/Comment';
import { Container } from './components/shared/Container';

function App() {
  return (
    <Container>
      <Comment datetime={new Date()} username="thedani" />
    </Container>
  );
}

export default App;
