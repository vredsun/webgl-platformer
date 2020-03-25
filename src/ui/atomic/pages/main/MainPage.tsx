import * as React from 'react';
import Absolute from 'ui/atomic/atoms/Absolute/Absolute';

type Props = {};

const MainPage: React.FC<Props> = React.memo(
  (props) => {

    return (
      <Absolute>MainPage</Absolute>
    );
  },
);

export default MainPage;
