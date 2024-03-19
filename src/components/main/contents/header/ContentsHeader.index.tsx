import * as S from './ContentsHeader.styles';

export default function ContentsHeader(): JSX.Element {
  return (
    <S.Wrapper>
      <S.UserImg></S.UserImg>
      <S.UserInfo>
        <S.UserId>__userid__</S.UserId>
        <S.UserLoc>솔마루 조선대</S.UserLoc>
      </S.UserInfo>
    </S.Wrapper>
  );
}
