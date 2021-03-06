import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectIsInitialLoading } from 'store/loading/selectors';

type Props = {};

const LoadingContainer = styled.div<{ isVisible: boolean  }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};

  transition: opacity 500ms;
`;

const LoadingPage: React.FC<Props> = React.memo(
  (props) => {
    const isInitialLoading = useSelector(selectIsInitialLoading);

    const isVisible = (
      isInitialLoading
    );

    return (
      <UiMenu allPointerEvents={isVisible ? 'all' : 'none'}>
        <LoadingContainer isVisible={isVisible}>
          {
            isVisible && (
              <React.Fragment>
                <div></div>
                <div>some word</div>
                <div>status bar</div>
              </React.Fragment>
            )
          }
        </LoadingContainer>

      </UiMenu>
    );
  },
);

export default LoadingPage;
