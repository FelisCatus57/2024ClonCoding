import styled from 'styled-components';
import Contents from './contents/Contents.index';
import Story from './story/Story.index';

export default function Main(): JSX.Element {
  const Wrapper = styled.div`
    width: 630px;
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
<<<<<<< HEAD
        {/* 스크롤 테스트..*/}
        <Contents />
        <Contents />
        {/* 스크롤 테스트..*/}
=======
        {/* 스크롤 테스트 .*/}
        <Contents />
        <Contents />
        {/* 스크롤 테스트 .*/}
>>>>>>> 25149b7b4c631594f73d58dc759792624e65e8ff
      </Wrapper>
    </>
  );
}
