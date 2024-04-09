import axios from 'axios';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

// 유효성 검사 스키마
const schema = yup
  .object({
    username: yup.string().required('아이디는 필수입니다.'),
    password: yup.string().required('비밀번호는 필수입니다'),
    name: yup.string().required('이름은 필수입니다'),
    nickname: yup.string().required('닉네임은 필수입니다'),
    email: yup.string().email('이메일 형식이 아닙니다').required('이메일은 필수입니다'),
  })
  .required();

export default function useSignup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signup = (data: { username: string; password: string; name: string; nickname: string; email: string }) => {
    const { username, password, name, nickname, email } = data;
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/signup`, { username, password, name, nickname, email })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          alert('회원가입이 완료되었습니다.');
          router.push('/login');
        }
      })
      .catch((error) => alert(error.response.data.message));
  };

  return {
    register,
    handleSubmit: handleSubmit(signup),
    errors,
  };
}
