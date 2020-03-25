import styled from 'styled-components';

const UiMenu = styled.div<{ pointerEvents: 'all' | 'none'}>`
  position: absolute;
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  width: 100%;
  height: 100%;
`;

export default UiMenu;
