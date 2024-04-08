import styled from 'styled-components';
import Contents from './contents/Contents.index';
import Story from './story/Story.index';
import useRefreshToken from '../../services/useRefreshToken';
import { useEffect } from 'react';

export default function Main(): JSX.Element {
  const Wrapper = styled.div`
    max-width: 630px;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <>
      <Wrapper>
        <Story />
        <Contents />
        <Contents />
        <Contents />
      </Wrapper>
    </>
  );
}
