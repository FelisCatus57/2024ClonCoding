import * as S from './Login.styles';

export default function Login(): JSX.Element {
  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.Title>Chosungram</S.Title>
        <S.Input placeholder="이메일" style={{ marginBottom: '2%' }} />
        <S.Input placeholder="비밀번호" />
        <S.LoginButton>로그인</S.LoginButton>
        <S.SignupBox>
          <S.SignupText>계정이 없으신가요? </S.SignupText>
          <S.SignupText style={{ color: '#0174DF' }}>가입하기</S.SignupText>
        </S.SignupBox>
      </S.LoginBox>
    </S.Wrapper>
  );
}
