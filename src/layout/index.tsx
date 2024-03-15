import styled from 'styled-components';
import Sidebar from './sidebar/SideBar.index';

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 79vw;
  background-color: #f9f9f9;
`;

const LeftWrapper = styled.div`
  width: 21vw;
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-start;
`;

// const RightWrapper = styled.div`
//   width: 35vw;
//   background-color: #f9f9f9;
// `;

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <Wrapper>
      <LeftWrapper>
        <Sidebar />
      </LeftWrapper>
      <MainWrapper>
        <Body>{props.children}</Body>
      </MainWrapper>
      {/* <RightWrapper></RightWrapper> */}
    </Wrapper>
  );
}
