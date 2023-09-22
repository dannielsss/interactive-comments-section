import { Dispatch } from 'react';

// Acciones para el dispatch reducer
export type Actions = { type: 'test' };

// Interfaz para los valores del contexto
export interface CommentsContextState {
  comments: [];
  dispatch: Dispatch<Actions>;
}

// Valores iniciales del contexto
export const INITIAL_STATE: CommentsContextState = {
  comments: [],

  dispatch: () => {},
};
