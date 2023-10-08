import ReactTimeago from 'react-timeago';
import { COLORS } from '@/constants';
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
  background: ${COLORS.primary.ModerateBlue};
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
      color: ${COLORS.neutral.DarkBlue};
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
    props.$deletemode ? COLORS.primary.SoftRed : COLORS.primary.ModerateBlue};
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
  color: ${COLORS.neutral.GrayishBlue};
  font-weight: 400;
`;

/**
 * Para la foto de perfil del usuario
 */
export const ProfilePicture = styled.img`
  width: 35px;
`;

/**
 * Para contener los botones del modo edicion
 */
export const EditModeButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

/**
 * Para contener el contenido del mensaje
 */
interface CommentContentProps {
  $editingMode: boolean;
}

export const CommentContent = styled.textarea<CommentContentProps>`
  font-family: 'Rubik', sans-serif;
  font-size: 1em;
  line-height: 22px;

  outline: none;
  background: none;

  border-radius: 5px;
  padding: 10px;

  width: 100%;
  height: 100%;
  resize: none;

  border: ${(props) => (props.$editingMode ? '1px solid black' : 'none')};
  cursor: ${(props) => (props.$editingMode ? 'text' : 'default')};
  color: ${(props) =>
    props.$editingMode ? 'black' : COLORS.neutral.GrayishBlue};
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

  background: ${COLORS.neutral.VeryLightGray};
  color: ${COLORS.primary.ModerateBlue};
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
    color: ${COLORS.primary.ModerateBlue};
  }
`;
