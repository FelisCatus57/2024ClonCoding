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

const MainWrapper = styled.div``;

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';
  const isSignupPage = router.pathname === '/signup';
  const isMypage = router.pathname === '/mypage';
  return (
    <Wrapper>
      {!isLoginPage && !isSignupPage && !isMypage && <Headerbar />}
      {!isLoginPage && !isSignupPage && <Sidebar />}
      <MainWrapper>
        <Body>{props.children}</Body>
      </MainWrapper>
    </Wrapper>
  );
}
