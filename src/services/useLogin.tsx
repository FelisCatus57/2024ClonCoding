import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../commons/globalstate/globalstate';
import { setCookie } from '../lib/react-cookie';

interface userInfo {
  username: string;
  password: string;
}
export default function useLogin(userInfo: userInfo) {
  const [, setLoggedin] = useRecoilState<boolean | null>(isLoggedIn);

  const router = useRouter();
  const login = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}login`, userInfo)
      .then((res) => {
        if (res.status === 200) {
          const accessToken = res.headers['authorization'];
          const refreshToken = res.headers['authorization-refresh'];
          localStorage.setItem('accessToken', accessToken);
          setCookie('refreshToken', refreshToken);
          console.log('accessToken', accessToken);
          console.log('refreshToken', refreshToken);
          setLoggedin(true);
          alert('로그인 성공');
          router.push('/');
        }
      })
      .catch((error) => alert(error));
  };
  return login;
}
