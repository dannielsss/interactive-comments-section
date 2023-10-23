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
      content: '@edel exacto',
      datetime: new Date(),
      profilePicture: ProfilePictureAmyrobson,
      author: 'gabriela',
      author_id: 'askjdasd',
      commentParentId: '1',
    },
  ],
  comments: [
    {
      id: '1',
      author: 'edel',
      datetime: new Date(),
      content: 'buena jugabilidad',
      profilePicture: ProfilePictureMaxBlagun,
      author_id: 'ykasdbaksjdasd',
    },
    {
      id: uuidv4(),
      author: 'juan',
      datetime: new Date(),
      content: 'al juego le falta diversion',
      profilePicture: ProfilePictureJuliusomo,
      author_id: 'qwkguebas,m,das',
    },
  ],
  myProfile: {
    id: 'myProfile',
    username: 'daniel',
    profilePicture: ProfilePictureRamsesMiron,
  },

  dispatch: () => {},
};
