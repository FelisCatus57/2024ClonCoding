import styled from 'styled-components';
import Sidebar from './sidebar/SideBar.index';
import Headerbar from './headerbar/HeaderBar.index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, useSsrComplectedState } from '../commons/globalstate/globalstate';
import useLogin from '../services/useLogin';
import { Refresh } from '@mui/icons-material';
import { getCookie, setCookie } from '../lib/react-cookie';
import axios from 'axios';

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
  const isHomePage = router.pathname === '/';
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 816 && router.pathname.startsWith('/message/')) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [router.pathname]);

  return (
    <Wrapper>
      {isHomePage && <Headerbar />}
      {!isLoginPage && !isSignupPage && isSidebarVisible && <Sidebar />}
      <MainWrapper>
        <Body>{props.children}</Body>
      </MainWrapper>
    </Wrapper>
  );
}
