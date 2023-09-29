import {
  ProfilePictureMaxBlagun,
  ProfilePictureRamsesMiron,
} from '@/constants';
import { Dispatch } from 'react';

// Interfaz para el comentario
export interface IComment {
  id: string;
  username: string;
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
      id: '1234',
      username: 'edel',
      datetime: new Date(),
      content: 'quepedo',
      profilePicture: ProfilePictureMaxBlagun,
    },
  ],
  myProfile: {
    id: '1234',
    username: 'daniel',
    profilePicture: ProfilePictureRamsesMiron,
  },

  dispatch: () => {},
};
