import { useState } from 'react';
import * as S from '../login/Login.styles';
import Link from 'next/link';
import useSignup from '../../services/useSignup';

export default function Signup() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [email, setEmail] = useState('');
  // const signup = useSignup({ username, password, name, nickname, email });
  const { register, handleSubmit, errors } = useSignup();
  return (
    <S.Wrapper>
      <S.SignupBox>
        <S.Title>Chosungram</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.Input {...register('username')} placeholder="아이디" />
          {errors.username && <S.Error>{errors.username.message}</S.Error>}
          <S.Input {...register('password')} type="password" placeholder="비밀번호" />
          {errors.password && <S.Error>{errors.password.message}</S.Error>}
          <S.Input {...register('name')} placeholder="이름" />
          {errors.name && <S.Error>{errors.name.message}</S.Error>}
          <S.Input {...register('nickname')} placeholder="사용하실 닉네임" />
          {errors.nickname && <S.Error>{errors.nickname.message}</S.Error>}
          <S.Input {...register('email')} type="email" placeholder="이메일" />
          {errors.email && <S.Error>{errors.email.message}</S.Error>}
          <S.LoginButton type="submit">가입</S.LoginButton>
        </S.Form>
        <S.SignupDiv>
          <S.SignupText>계정이 있으신가요? </S.SignupText>
          <Link href={'/login'}>
            <S.SignupText style={{ color: '#0174DF' }}>로그인</S.SignupText>
          </Link>
        </S.SignupDiv>
      </S.SignupBox>
    </S.Wrapper>
  );
}
