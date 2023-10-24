import { COLORS } from '@/constants';
import styled from 'styled-components';

/**
 * Para contener la alerta
 */
export const ToastContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00000075;
  color: ${COLORS.neutral.DarkBlue};
`;

/**
 * Para contener el contenido de la alerta
 */
export const ToastContent = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 2rem;
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/**
 * Para contener el titulo
 */
export const ToastTitle = styled.h3`
  font-weight: 500;
`;

/**
 * Para contener el parrafo
 */
export const ToastText = styled.p`
  font-weight: 400;
  line-height: 24px;
`;

/**
 * Para contener los botones
 */
export const ToastButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
