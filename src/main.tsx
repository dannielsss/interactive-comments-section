import React from 'react';
import ReactDOM from 'react-dom/client';

import CommentsProvider from './context/Comment/Comments.provider.tsx';
import GlobalStyles from './components/shared/GlobalStyles.tsx';
import App from './App.tsx';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CommentsProvider>
      <GlobalStyles />
      <App />
    </CommentsProvider>
  </React.StrictMode>
);
