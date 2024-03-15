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

const Space = styled.div`
  width: calc(100vw- 1258px);
`;
const MainWrapper = styled.div`
  width: 1013px;
`;

const LeftWrapper = styled.div`
  width: 245px;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <Wrapper>
      <LeftWrapper>
        <Sidebar />
      </LeftWrapper>
      <Space />
      <MainWrapper>
        <Body>{props.children}</Body>
      </MainWrapper>
    </Wrapper>
  );
}
