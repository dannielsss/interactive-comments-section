import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './components/shared/GlobalStyles.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
