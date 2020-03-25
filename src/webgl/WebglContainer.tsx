import * as React from 'react';
import styled from 'styled-components';
import renderWebGl from 'webgl/render';

type Props = {};

const CanvasContainer = styled.canvas`
  height: 100vh;
  width: 100vw;
`;

const WebglContainer: React.FC<Props> = React.memo(
  (props) => {
    const canvasRef = React.useRef<HTMLCanvasElement>();

    React.useEffect(
      () => {
        renderWebGl(canvasRef.current);
      },
      [],
    );

    return (
      <CanvasContainer ref={canvasRef} />
    );
  },
);

export default WebglContainer;
