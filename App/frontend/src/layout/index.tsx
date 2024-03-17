import styled from 'styled-components';
import Sidebar from './sidebar/SideBar.index';
import Headerbar from './headerbar/HeaderBar.index';
import { useRouter } from 'next/router';

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

// const Space = styled.div`
//   width: calc(100vw- 1258px);
// `;
const MainWrapper = styled.div``;

// const LeftWrapper = styled.div`
//   width: 245px;
//   background-color: beige;
// `;

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  return (
    <Wrapper>
      {!isLoginPage && <Headerbar />}

      {/* <LeftWrapper> */}
      {!isLoginPage && <Sidebar />}
      {/* </LeftWrapper> */}
      {/* <Space /> */}
      <MainWrapper>
        <Body>{props.children}</Body>
      </MainWrapper>
    </Wrapper>
  );
}
