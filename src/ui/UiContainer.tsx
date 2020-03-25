import * as React from 'react';
import Absolute from 'ui/atomic/atoms/Absolute/Absolute';
import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';

type Props = {};

const UiContainer: React.FC<Props> = React.memo(
  (props) => {
    const isShowingMenu = true;

    return (
      <UiMenu pointerEvents={isShowingMenu ? 'all' : 'none'}>
        <Absolute isFull>UiContainer</Absolute>
      </UiMenu>
    );
  },
);

export default UiContainer;
