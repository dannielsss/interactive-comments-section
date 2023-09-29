import React from 'react';
import { Container } from './components/shared/Container';

import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';

function App() {
  return (
    <Container>
      <CommentList />
      <CommentForm />
    </Container>
  );
}

export default App;
