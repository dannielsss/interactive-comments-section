import { COLORS } from '@/constants';
import styled from 'styled-components';

interface ButtonFormProps {
  $blue?: boolean;
  $red?: boolean;
}

export const ButtonForm = styled.button<ButtonFormProps>`
  background: ${(props) =>
    (props.$red && COLORS.primary.SoftRed) ||
    (props.$blue && COLORS.primary.ModerateBlue)};

  padding: 5px;
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
