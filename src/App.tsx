import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Container } from './components/shared/Container';

import CommentForm from './components/Comment/CommentForm/CommentForm';
import CommentList from './components/Comments';

function App() {
  return (
    <Container>
      <CommentList />
      <CommentForm />
      <ToastContainer />
    </Container>
  );
}

export default App;
