import Link from 'next/link';
import * as S from './Login.styles';
import useLogin from '../../services/useLogin';

export default function Login(): JSX.Element {
  const userInfo = {
    username: 'test',
    password: 'test123',
  };

  const login = useLogin(userInfo);
  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>Chosungram</S.Title>
        <S.Input placeholder="아이디" style={{ marginBottom: '2%' }} />
        <S.Input placeholder="비밀번호" />
        <S.LoginButton onClick={login}>로그인</S.LoginButton>
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
