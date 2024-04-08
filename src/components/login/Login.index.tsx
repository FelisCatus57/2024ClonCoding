import Link from 'next/link';
import * as S from './Login.styles';
import useLogin from '../../services/useLogin';
import { useState } from 'react';

export default function Login(): JSX.Element {
   //const userInfo = {
   //  username: 'test',
   //  password: 'test123',
   //};

  const { register, handleSubmit, errors } = useLogin();

  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>Chosungram</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.Input {...register('username')} placeholder="아이디" style={{ marginBottom: '2%' }} />
          {errors.username && <S.Error>{errors.username.message}</S.Error>}
          <S.Input {...register('password')} type="password" placeholder="비밀번호" />
          {errors.password && <S.Error>{errors.password.message}</S.Error>}
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.Form>
        <S.SignupDiv>
          <S.SignupText>계정이 없으신가요? </S.SignupText>
          <Link href={'/signup'}>
            <S.SignupText style={{ color: '#0174DF' }}>가입하기</S.SignupText>
          </Link>
        </S.SignupDiv>
      </S.LoginBox>
    </S.Wrapper>
  );
}
