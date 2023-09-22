import { createContext } from 'react';
import { CommentsContextState, INITIAL_STATE } from './Comments.constants';

// Contexto de los comentarios
export const CommentsContext =
  createContext<CommentsContextState>(INITIAL_STATE);
