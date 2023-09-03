import { styled } from 'styled-components';

/**
 * Para contener todo el comentario
 */
export const CommentBox = styled.div`
  background: white;
  width: 100%;

  padding: 1.5rem;

  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

/**
 * Para contener los elementos del comentario
 */
export const CommentElements = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/**
 * Para contener el header del comentario
 */
export const CommentHeader = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

/**
 * Para la foto de perfil del usuario
 */
export const ProfilePicture = styled.img`
  width: 40px;
`;
