import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import renderWebGl from 'webgl/render';
import { selectUiIsInGame } from 'store/ui/selectors';

type Props = {};

const CanvasContainer = styled.canvas`
  height: 100vh;
  width: 100vw;
`;

const WebglContainer: React.FC<Props> = React.memo(
  (props) => {
    const canvasRef = React.useRef<HTMLCanvasElement>();
    const isShowingMenu = useSelector(selectUiIsInGame);

    React.useEffect(
      () => {
        renderWebGl(canvasRef.current, isShowingMenu);
      },
      [isShowingMenu],
    );

    return (
      <CanvasContainer ref={canvasRef} />
    );
  },
);

export default WebglContainer;
