import { useState } from 'react';
import * as S from '../login/Login.styles';
import Link from 'next/link';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  return (
    <S.Wrapper>
      <S.SignupBox>
        <S.Title>Chosungram</S.Title>
        <S.Input placeholder="이메일" onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '2%' }} />
        <S.Input
          placeholder="사용하실 닉네임"
          onChange={(e) => setNickname(e.target.value)}
          style={{ marginBottom: '2%' }}
        />
        <S.Input placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
        <S.LoginButton>가입</S.LoginButton>
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
