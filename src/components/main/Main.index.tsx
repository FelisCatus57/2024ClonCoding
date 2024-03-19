import styled from 'styled-components';
import Contents from './contents/Contents.index';
import Story from './story/Story.index';

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
        {/* 스크롤 테스트..*/}
        <Contents />
        {/* 스크롤 테스트..*/}
        <Contents />
      </Wrapper>
    </>
  );
}
