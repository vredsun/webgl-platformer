import styled, { css } from 'styled-components';

const IsFullCss = css`
  width: 100%;
  height: 100%;
`;

const AllPointerEvents = styled.div<{ pointerEvents: 'all' | 'none'; isFull?: boolean }>`
  pointer-events: ${({ pointerEvents }) => pointerEvents};

  ${({ isFull }) => isFull && IsFullCss};
`;

export default AllPointerEvents;
