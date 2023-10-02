import ReactTimeago from 'react-timeago';
import { styled } from 'styled-components';

/**
 * Para contener todo el comentario
 */
export const CommentBox = styled.div`
  background: white;
  width: 100%;

  padding: 1.5rem;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

/**
 * Para el titulo de you
 */
export const YouTitle = styled.div`
  background: hsl(238, 40%, 52%);
  padding: 2px 10px;
  color: #ffffff;
  border-radius: 5px;
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
    align-items: center;
    gap: 1.2rem;

    & > p {
      color: hsl(212, 24%, 26%);
      font-weight: 700;
    }
  }
`;

/**
 * Para contener el boton de reply
 */
interface ButtonProps {
  $deletemode?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  color: ${(props) =>
    props.$deletemode ? 'hsl(358, 79%, 66%)' : 'hsl(238, 40%, 52%)'};
  font-weight: 700;

  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

/**
 * Para contener el texto del tiempo de creacion
 */
export const CreatedAt = styled(ReactTimeago)`
  color: hsl(211, 10%, 45%);
  font-weight: 400;
`;

/**
 * Para la foto de perfil del usuario
 */
export const ProfilePicture = styled.img`
  width: 35px;
`;

/**
 * Para contener el contenido del mensaje
 */
export const CommentContent = styled.p`
  color: hsl(211, 10%, 45%);
  line-height: 22px;
`;

/**
 * Para contener el contador
 */
export const CounterBox = styled.div`
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  font-size: 18px;
  gap: 0.3rem;

  height: 125px;

  background: hsl(228, 33%, 97%);
  color: hsl(238, 40%, 52%);
  font-weight: 700;
`;

/**
 * Para los botones del contador
 */
export const CounterButton = styled.button`
  background: none;
  border: none;
  font-size: 25px;
  font-weight: 700;
  padding: 5px;
  color: hsl(211, 10%, 45%);

  &:hover {
    cursor: pointer;
    color: hsl(238, 40%, 52%);
  }
`;
