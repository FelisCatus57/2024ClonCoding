import axios from 'axios';

import { getCookie, setCookie } from './useReactCookie';
import { useRecoilValue } from 'recoil';
import { accesstoken } from '../commons/globalstate/globalstate';

export default function useLogout() {
  // const accessToken = useRecoilValue(accesstoken);
  const accessToken = getCookie('accessToken');
  const logout = () => {
    if (accessToken) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/logout`, {
          headers: {
            Authorization: accessToken,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.clear();
            setCookie('refreshToken', '', { path: '/', maxAge: -1 }); // 쿠키 삭제
            setCookie('accessToken', '', { path: '/', maxAge: -1 }); // 쿠키 삭제
            window.location.href = '/login'; // 로그인 페이지로 이동
          }
        })
        .catch((error) => console.log(error));
    } else {
      localStorage.clear();
      setCookie('refreshToken', '', { path: '/', maxAge: -1 }); // 쿠키 삭제
      window.location.href = '/login'; // 로그인 페이지로 이동
    }
  };

  return logout;
}
