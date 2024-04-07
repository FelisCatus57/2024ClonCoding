import axios from 'axios';
import { useRouter } from 'next/router';
import { setCookie } from './useReactCookie';
import useRefreshToken from './useRefreshToken';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { name, nickname, profileImageUrl, username } from '../commons/globalstate/globalstate';
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
  const [, setUsername] = useRecoilState<string | null | undefined>(username);
  const [, setNickname] = useRecoilState<string | null | undefined>(nickname);
  const [, setName] = useRecoilState<string | null | undefined>(name);
  const [, setProfileIamgeUrl] = useRecoilState<string | null | undefined>(profileImageUrl);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = (data: { username: string; password: string }) => {
    const { username, password } = data;
    axios
      .post(`${process.env.NEXT_PUBLIC_API}login`, { username, password })
      .then((res) => {
        if (res.status === 200) {
          const accessToken = res.headers['authorization'];
          const refreshToken = res.headers['authorization-refresh'];
          localStorage.setItem('accessToken', accessToken);
          setCookie('refreshToken', refreshToken);
          setUsername(username);
          // 로그인 성공 후 프로필 정보 요청
          getProfile(accessToken);
          // router.push('/');
          // 로그인 성공 후 59분 후에 토큰 재발급 함수를 실행합니다.
          // setTimeout(refreshTokens, 59 * 60 * 1000);
        }
      })
      .catch((error) => alert('아이디 비밀번호가 올바르지 않습니다.'));
  };

  // 프로필 정보를 요청하는 함수
  const getProfile = async (accessToken: string) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}api/profile`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        // 여기에서 응답으로 받은 프로필 정보를 처리합니다.
        console.log(response.data);
        // 필요한 경우 상태에 프로필 정보 저장 또는 다른 페이지로 라우팅
        setNickname(response.data.data.nickname);
        setName(response.data.data.name);
        setProfileIamgeUrl(response.data.data.profileImageUrl);
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
