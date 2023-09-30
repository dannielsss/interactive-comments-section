import { Dispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  ProfilePictureMaxBlagun,
  ProfilePictureRamsesMiron,
} from '@/constants';

// Interfaz para el comentario
export interface IComment {
  id: string;
  author: string;
  author_id: string;
  profilePicture: string;
  content: string;
  datetime: Date;
}

export interface IUser {
  id: string;
  username: string;
  profilePicture: string;
}

// Acciones para el dispatch reducer
export type Actions = { type: 'NEW_COMMENT'; payload: IComment };

// Interfaz para los valores del contexto
export interface CommentsContextState {
  comments: IComment[];
  dispatch: Dispatch<Actions>;
  myProfile: IUser;
}

// Valores iniciales del contexto
export const INITIAL_STATE: CommentsContextState = {
  comments: [
    {
      id: uuidv4(),
      author: 'edel',
      datetime: new Date(),
      content: 'quepedo',
      profilePicture: ProfilePictureMaxBlagun,
      author_id: '',
    },
  ],
  myProfile: {
    id: 'myProfile',
    username: 'daniel',
    profilePicture: ProfilePictureRamsesMiron,
  },

  dispatch: () => {},
};
