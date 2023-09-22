import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './components/shared/GlobalStyles.tsx';
import App from './App.tsx';
import CommentsProvider from './context/Comment/Comments.provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CommentsProvider>
      <GlobalStyles />
      <App />
    </CommentsProvider>
  </React.StrictMode>
);
