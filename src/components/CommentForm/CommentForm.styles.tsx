// TODO Create: CommentSendButton

import styled from 'styled-components';

/**
 * Para contener a todos el componente
 */
export const CommentFormBox = styled.form`
  padding: 1.5rem;
  background: #ffffff;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

/**
 * Para contener el textarea para escribir el comentario
 */
export const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  height: 100px;
  padding: 1rem;
  font-size: 1em;

  font-family: 'Rubik', sans-serif;

  border-radius: 5px;
  border: 1px solid #0000003d;
  outline: none;

  &:focus {
    cursor: pointer;
    border: 1px solid #000000;
  }
`;

/**
 * Para la foto de perfil del usuario
 */
export const CommentProfilePicture = styled.img`
  width: 50px;
  height: 50px;
`;

export const CommentSendButton = styled.button`
  background: hsl(238, 40%, 52%);

  height: 50px;
  width: 100px;

  border: none;
  border-radius: 5px;
  color: #fff;

  font-size: 1em;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;

  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;
