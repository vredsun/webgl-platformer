import styled, { css } from 'styled-components';

const IsFullCss = css`
  width: 100%;
  height: 100%;
`;

const Absolute = styled.div<{ isFull?: boolean }>`
  position: absolute;

  ${({ isFull }) => isFull && IsFullCss};
`;

export default Absolute;
