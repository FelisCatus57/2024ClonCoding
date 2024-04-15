import axios from 'axios';
import { getCookie, setCookie } from './useReactCookie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useRefreshToken() {
  const router = useRouter();
  const refreshToken = getCookie('refreshToken'); // 쿠키에서 리프레시 토큰을 가져옵니다.
  const accessToken = getCookie('accessToken'); // 쿠키에서 엑세스 토큰을 가져옵니다.

  const refreshTokens = async () => {
    if (refreshToken && accessToken && refreshToken !== 'undefined' && accessToken !== 'undefined') {
      const formData = new URLSearchParams();
      formData.append('refreshToken', refreshToken);
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/api/reissue`, formData.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          // 쿠키를 순차적으로 삭제하고 새로 설정
          setCookie('refreshToken', '', { path: '/', maxAge: -1 });
          setCookie('accessToken', '', { path: '/', maxAge: -1 });

          // 새로운 토큰으로 쿠키를 설정
          const newAccessToken = response.headers['authorization'];
          const newRefreshToken = response.headers['authorization-refresh'];
          setCookie('accessToken', newAccessToken, { path: '/', maxAge: 3600 });
          setCookie('refreshToken', newRefreshToken, { path: '/', maxAge: 3600 * 24 * 30 });

          // 토큰 재발급 성공 시, 59분 후 재실행
          setTimeout(refreshTokens, 59 * 60 * 1000);
        }
      } catch (error) {
        alert('다시 로그인 해주세요.');
        localStorage.clear();
        setCookie('refreshToken', '', { path: '/', maxAge: -1 });
        setCookie('accessToken', '', { path: '/', maxAge: -1 });
        router.push('/login');
      }
    } else {
      alert('다시 로그인 해주세요.');
      localStorage.clear();
      setCookie('refreshToken', '', { path: '/', maxAge: -1 });
      setCookie('accessToken', '', { path: '/', maxAge: -1 });
      router.push('/login');
    }
  };

  useEffect(() => {
    refreshTokens();
  }, []);

  return refreshTokens;
}
