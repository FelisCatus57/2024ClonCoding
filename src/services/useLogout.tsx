import axios from 'axios';
import { useRouter } from 'next/router';
import { setCookie } from './useReactCookie';

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    if (accessToken) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API}logout`, {
          headers: {
            Authorization: accessToken,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.clear();
            setCookie('refreshToken', '', { path: '/', maxAge: -1 }); // 쿠키 삭제
            window.location.href = '/login'; // 로그인 페이지로 이동
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return logout;
}
