import { Dispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  ProfilePictureAmyrobson,
  ProfilePictureJuliusomo,
  ProfilePictureMaxBlagun,
  ProfilePictureRamsesMiron,
} from '@/constants';

// Interfaz para el comentario a editar
export interface IEditComment {
  content: string;
  comment_id: string;
}

// Interfaz para el comentario
export interface IComment {
  id: string;
  author: string;
  author_id: string;
  profilePicture: string;
  commentParentId?: string;
  content: string;
  datetime: Date;
}

// Interfaz para el usuario
export interface IUser {
  id: string;
  username: string;
  profilePicture: string;
}

// Acciones para el dispatch reducer
export type Actions =
  | { type: 'NEW_COMMENT'; payload: IComment }
  | { type: 'UPDATE_COMMENT'; payload: IEditComment }
  | { type: 'DELETE_COMMENT'; payload: { commentId: string } }
  | { type: 'REPLY_COMMENT'; payload: IComment };

// Interfaz para los valores del contexto
export interface CommentsContextState {
  comments: IComment[];
  replies: IComment[];
  dispatch: Dispatch<Actions>;
  myProfile: IUser;
}

// Valores iniciales del contexto
export const INITIAL_STATE: CommentsContextState = {
  replies: [
    {
      id: uuidv4(),
      content: '@maxblagun exacto',
      datetime: new Date(),
      profilePicture: ProfilePictureRamsesMiron,
      author: 'Ramsesmiron',
      author_id: 'askjdasd',
      commentParentId: '2',
    },
  ],
  comments: [
    {
      id: '1',
      author: 'amyrobson',
      datetime: new Date(),
      content: 'buena jugabilidad',
      profilePicture: ProfilePictureAmyrobson,
      author_id: 'ykasdbaksjdasd',
    },
    {
      id: '2',
      author: 'maxblagun',
      datetime: new Date(),
      content: 'al juego le falta diversion',
      profilePicture: ProfilePictureMaxBlagun,
      author_id: 'qwkguebas,m,das',
    },
  ],
  myProfile: {
    id: 'myProfile',
    username: 'juliusomo',
    profilePicture: ProfilePictureJuliusomo,
  },

  dispatch: () => {},
};
