import styled from 'styled-components';
import Main from '../src/components/main/Main.index';
import RecommendFriend from '../src/components/main/recommendfriend/RecommendFriend.index';

export default function Home() {
  const Wrapper = styled.div`
    position: relative;
    width: auto;
    display: flex;
    justify-content: center;
  `;

  return (
    <Wrapper>
      <Main />
      <RecommendFriend />
    </Wrapper>
  );
}
