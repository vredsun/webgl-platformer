import styled from 'styled-components';

const UiMenu = styled.div<{ allPointerEvents: 'all' | 'none'}>`
  position: absolute;
  pointer-events: ${({ allPointerEvents: pointerEvents }) => pointerEvents};
  width: 100%;
  height: 100%;
`;

export default UiMenu;
