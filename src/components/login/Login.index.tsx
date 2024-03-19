import Link from 'next/link';
import * as S from './Login.styles';
import axios from 'axios';

export default function Login(): JSX.Element {
  // axios.defaults.withCredentials = true;
  const useLogin = () => {
    axios
      .post('http://uncertain.shop:8080/login', {
        username: 'test',
        password: 'test123',
      })
      .then((res) => {
        if (res.status === 200) {
          let accessToken = res.headers['authorization'];
          console.log(accessToken);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>Chosungram</S.Title>
        <S.Input placeholder="이메일" style={{ marginBottom: '2%' }} />
        <S.Input placeholder="비밀번호" />
        <S.LoginButton onClick={useLogin}>로그인</S.LoginButton>
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
