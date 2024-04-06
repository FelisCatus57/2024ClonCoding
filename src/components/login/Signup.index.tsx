import { useState } from 'react';
import * as S from '../login/Login.styles';
import Link from 'next/link';
import useSignup from '../../services/useSignup';

export default function Signup() {
  const [username, setUsername] = useState('fronttest');
  const [password, setPassword] = useState('frotntest123');
  const [name, setName] = useState('minsukim');
  const [nickname, setNickname] = useState('minsukim');
  const [email, setEmail] = useState('front@test.com');
  const signup = useSignup({ username, password, name, nickname, email });
  return (
    <S.Wrapper>
      <S.SignupBox>
        <S.Title>Chosungram</S.Title>
        <S.Input placeholder="아이디" onChange={(e) => setUsername(e.target.value)} />
        <S.Input placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
        <S.Input placeholder="이름" onChange={(e) => setName(e.target.value)} />
        <S.Input placeholder="사용하실 닉네임" onChange={(e) => setNickname(e.target.value)} />
        <S.Input placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
        <S.LoginButton onClick={signup}>가입</S.LoginButton>
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
