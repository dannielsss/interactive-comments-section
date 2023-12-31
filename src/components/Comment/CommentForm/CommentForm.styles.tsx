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
interface CommentTextareaProps {
  $error: boolean;
}

export const CommentTextarea = styled.textarea<CommentTextareaProps>`
  width: 100%;
  height: 100px;
  padding: 1rem;
  font-size: 1em;

  resize: none;
  outline: none;

  font-family: 'Rubik', sans-serif;

  border-radius: 5px;
  border: ${(props) =>
    props.$error ? '1px solid red' : '1px solid #0000003d'};

  &:focus {
    cursor: pointer;
    border: ${(props) =>
      props.$error ? '1px solid red' : '1px solid #000000'};
  }
`;

/**
 * Para la foto de perfil del usuario
 */
export const CommentProfilePicture = styled.img`
  width: 50px;
  height: 50px;
`;
