import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Container } from './components/shared/Container';

import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';

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
