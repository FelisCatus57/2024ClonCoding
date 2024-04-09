import axios from 'axios';
import { useRouter } from 'next/router';
import { setCookie } from './useReactCookie';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { set, useForm } from 'react-hook-form';
import { accesstoken, name, nickname, profileImageUrl, username } from '../commons/globalstate/globalstate';
import { useRecoilState } from 'recoil';

// 유효성 검사 스키마
const schema = yup
  .object({
    username: yup.string().required('아이디는 필수입니다.'),
    password: yup.string().required('비밀번호는 필수입니다'),
  })
  .required();

export default function useLogin() {
  const router = useRouter();
  // const [, setAccessToken] = useRecoilState<string | null | undefined>(accesstoken);
  const [, setUsername] = useRecoilState<string | null | undefined>(username);
  const [, setNickname] = useRecoilState<string>(nickname);
  const [, setName] = useRecoilState<string | null | undefined>(name);
  const [, setProfileImageUrl] = useRecoilState<string | null | undefined>(profileImageUrl);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const refreshTokens = (accessToken: string, refreshToken: string) => {
    if (refreshToken && accessToken) {
      const formData = new URLSearchParams();
      formData.append('refreshToken', refreshToken);
      axios
        .post(`${process.env.NEXT_PUBLIC_API}/api/reissue`, formData.toString(), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            // 응답에서 새로운 토큰을 받아 로컬 스토리지와 쿠키에 저장합니다.
            const accessToken = res.headers['authorization'];
            const refreshToken = res.headers['authorization-refresh'];
            // localStorage.setItem('accessToken', accessToken);
            // setAccessToken(accessToken);
            setCookie('accessToken', accessToken);
            setCookie('refreshToken', refreshToken);
            // 재발급 성공 시 59분 후에 다시 토큰을 재발급하도록 setTimeout 설정
            // setTimeout(refreshTokens, 59 * 60 * 1000);
            setTimeout(() => refreshTokens(accessToken, refreshToken), 59 * 60 * 1000);
          }
        })
        .catch((error) => {
          alert('다시 로그인 해주세요.');
          localStorage.clear();
          setCookie('refreshToken', '', { path: '/', maxAge: -1 }); // 쿠키 삭제
          router.push('/login');
        });
    } else {
      alert('다시 로그인 해주세요.');
      localStorage.clear();
      setCookie('refreshToken', '', { path: '/', maxAge: -1 }); // 쿠키 삭제
      router.push('/login');
    }
  };

  const login = (data: { username: string; password: string }) => {
    const { username, password } = data;
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/login`, { username, password })
      .then((res) => {
        if (res.status === 200) {
          const accessToken = res.headers['authorization'];
          const refreshToken = res.headers['authorization-refresh'];
          // setAccessToken(accessToken);
          setCookie('accessToken', accessToken);
          setCookie('refreshToken', refreshToken);
          setUsername(username);
          // 로그인 성공 후 프로필 정보 요청
          getProfile(accessToken);
          // router.push('/');
          // 로그인 성공 후 59분 후에 토큰 재발급 함수를 실행합니다.
          setTimeout(() => refreshTokens(accessToken, refreshToken), 59 * 60 * 1000);
        }
      })
      .catch((error) => alert('아이디 비밀번호가 올바르지 않습니다.'));
  };

  // 프로필 정보를 요청하는 함수
  const getProfile = async (accessToken: string) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/profile`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // 여기에서 응답으로 받은 프로필 정보를 처리합니다.
        // 필요한 경우 상태에 프로필 정보 저장 또는 다른 페이지로 라우팅
        setNickname(response.data.data.nickname);
        setName(response.data.data.name);
        setProfileImageUrl(response.data.data.profileImageUrl || '/user.png');
        router.push('/'); // 예시: 프로필 페이지로 이동
      })
      .catch((error) => {
        console.error('프로필 정보를 불러오는 데 실패했습니다.', error);
      });
  };

  return {
    register,
    handleSubmit: handleSubmit(login),
    errors,
  };
}
