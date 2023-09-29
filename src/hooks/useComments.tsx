import { CommentsContext } from '@/context/Comment/Comments.context';
import { useContext } from 'react';

// Hook para obtener los datos del contexto
export const useComments = () => {
  return useContext(CommentsContext);
};
