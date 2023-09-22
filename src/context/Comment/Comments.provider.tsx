import React, { useReducer } from 'react';
import { CommentsContext } from './Comments.context';
import { CommentsReducer } from './Comments.reducer';
import { INITIAL_STATE } from './Comments.constants';

interface CommentsProviderProps {
  children: JSX.Element | JSX.Element[];
}

// Proveedor del contexto de los comentarios
function CommentsProvider({ children }: CommentsProviderProps) {
  const [state, dispatch] = useReducer(CommentsReducer, INITIAL_STATE);

  return (
    <CommentsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProvider;
